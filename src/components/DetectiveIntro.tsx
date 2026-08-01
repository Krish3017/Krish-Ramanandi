import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DetectiveIntroProps {
  onComplete: () => void;
}

type Phase = "SEARCHING" | "LOCKING" | "PAUSED" | "WHITE_PAGE" | "STAMPING" | "BURNING" | "FINISHED";

export const DetectiveIntro: React.FC<DetectiveIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("SEARCHING");

  const mousePosRef = useRef({ x: window.innerWidth * 0.72, y: window.innerHeight * 0.32 });
  const lensPosRef = useRef({ x: window.innerWidth * 0.72, y: window.innerHeight * 0.32 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(0);
  const idleTimeRef = useRef(0);

  const [lensState, setLensState] = useState({
    x: window.innerWidth * 0.72,
    y: window.innerHeight * 0.32,
    rotation: 0,
    glareShift: 0,
  });

  const targetRef = useRef<HTMLDivElement | null>(null);
  const [targetCenter, setTargetCenter] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [shakeOffset, setShakeOffset] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      onComplete();
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onComplete();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onComplete]);

  const updateTargetPosition = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setTargetCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    } else {
      setTargetCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  };

  useEffect(() => {
    updateTargetPosition();
    window.addEventListener("resize", updateTargetPosition);
    return () => window.removeEventListener("resize", updateTargetPosition);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (phase !== "SEARCHING") return;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (phase !== "SEARCHING") return;
      if (e.touches.length > 0) {
        mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [phase]);

  useEffect(() => {
    let animId: number;
    const stiffness = 0.085;
    const damping = 0.78;

    const loop = () => {
      if (phase === "SEARCHING") {
        const targetX = mousePosRef.current.x;
        const targetY = mousePosRef.current.y;

        const ax = (targetX - lensPosRef.current.x) * stiffness;
        const ay = (targetY - lensPosRef.current.y) * stiffness;

        velocityRef.current.x = (velocityRef.current.x + ax) * damping;
        velocityRef.current.y = (velocityRef.current.y + ay) * damping;

        lensPosRef.current.x += velocityRef.current.x;
        lensPosRef.current.y += velocityRef.current.y;

        const targetRotation = Math.max(-5.5, Math.min(5.5, velocityRef.current.x * 0.22));
        rotationRef.current += (targetRotation - rotationRef.current) * 0.12;

        const glareShift = velocityRef.current.x * 0.5;

        const speed = Math.hypot(velocityRef.current.x, velocityRef.current.y);
        let idleX = 0;
        let idleY = 0;
        if (speed < 0.3) {
          idleTimeRef.current += 0.035;
          idleX = Math.sin(idleTimeRef.current * 1.8) * 1.5;
          idleY = Math.cos(idleTimeRef.current * 1.4) * 1.2;
        }

        setLensState({
          x: lensPosRef.current.x + idleX,
          y: lensPosRef.current.y + idleY,
          rotation: rotationRef.current,
          glareShift,
        });

        const distToTarget = Math.hypot(
          lensPosRef.current.x - targetCenter.x,
          lensPosRef.current.y - targetCenter.y
        );

        if (distToTarget < 85) {
          setPhase("LOCKING");
        }
      } else if (phase === "LOCKING") {
        const dx = targetCenter.x - lensPosRef.current.x;
        const dy = targetCenter.y - lensPosRef.current.y;

        lensPosRef.current.x += dx * 0.14;
        lensPosRef.current.y += dy * 0.14;

        rotationRef.current += (0 - rotationRef.current) * 0.15;

        setLensState({
          x: lensPosRef.current.x,
          y: lensPosRef.current.y,
          rotation: rotationRef.current,
          glareShift: 0,
        });

        if (Math.hypot(dx, dy) < 1.2) {
          lensPosRef.current = { x: targetCenter.x, y: targetCenter.y };
          setLensState({ x: targetCenter.x, y: targetCenter.y, rotation: 0, glareShift: 0 });
          setPhase("PAUSED");
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [phase, targetCenter]);

  useEffect(() => {
    if (phase === "PAUSED") {
      let shakeCount = 0;
      const shakeInterval = setInterval(() => {
        shakeCount++;
        setShakeOffset({
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 3,
          rotate: (Math.random() - 0.5) * 1.2,
        });
        if (shakeCount >= 40) {
          setShakeOffset({ x: 0, y: 0, rotate: 0 });
        }
      }, 75);

      const pauseTimer = setTimeout(() => {
        clearInterval(shakeInterval);
        setPhase("WHITE_PAGE");
      }, 4500);

      return () => {
        clearInterval(shakeInterval);
        clearTimeout(pauseTimer);
      };
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "WHITE_PAGE") {
      const timer = setTimeout(() => setPhase("STAMPING"), 600);
      return () => clearTimeout(timer);
    }
    if (phase === "STAMPING") {
      const timer = setTimeout(() => setPhase("BURNING"), 1200);
      return () => clearTimeout(timer);
    }
    if (phase === "BURNING") {
      const timer = setTimeout(() => {
        setPhase("FINISHED");
        onComplete();
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Premium newspaper background — dense 5-column broadsheet layout
  const renderNewspaperGrid = (isSharp: boolean) => (
    <div className="w-full h-full min-h-screen bg-[#ECE7DA] px-8 py-8 flex flex-col justify-between select-none">
      {/* Top masthead rule */}
      <div className="max-w-[1300px] mx-auto w-full border-b-2 border-[#111111] pb-3 mb-6 flex justify-between items-center">
        <span className="font-mono-meta text-[10px] tracking-[0.3em] text-[#333] uppercase font-bold">THE INVESTIGATION EDITION</span>
        <span className="font-mono-meta text-[10px] tracking-[0.3em] text-[#333] uppercase font-bold">CLASSIFIED RECORDS &middot; EST. 2026</span>
      </div>

      <div className="grid grid-cols-5 gap-6 max-w-[1300px] mx-auto w-full flex-1">
        {/* Column 1 */}
        <div className="space-y-3.5">
          <div className="h-4 bg-[#222] rounded-sm w-3/4 mb-2" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-11/12" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
          </div>
          <div className="h-3.5 bg-[#333] rounded-sm w-3/5 my-2.5" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-5/6" />
          </div>
          <div className="h-3 bg-[#444] rounded-sm w-1/2 my-2" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-3/4" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-3.5">
          <div className="h-4 bg-[#222] rounded-sm w-2/3 mb-2" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
          </div>
          <div className="h-3.5 bg-[#333] rounded-sm w-3/4 my-2.5" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-11/12" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
          </div>
        </div>

        {/* Column 3 — CENTER COLUMN CONTAINING WANTED NOTICE */}
        <div className="space-y-3.5 flex flex-col justify-center items-center">
          <div className="h-4 bg-[#333] rounded-sm w-4/5 mb-2" />
          <div className="space-y-2 w-full">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
          </div>

          {/* WANTED NOTICE BOX — RED WANTED + BOLD BLACK KRISH RAMANANDI */}
          <div
            ref={isSharp ? null : targetRef}
            className="my-3 py-3 px-4 text-center border-y-2 border-[#111111] w-[140px] flex flex-col items-center justify-center bg-[#F7F3EA] shadow-xs"
          >
            <span className="font-serif font-extrabold text-[13px] text-[#A8382B] tracking-[0.25em] uppercase block leading-none mb-1.5">
              WANTED
            </span>
            <span className="font-serif text-[13.5px] text-[#111111] font-bold tracking-wide block leading-tight mb-1.5">
              Krish Ramanandi
            </span>
            <div className="w-8 h-[1.5px] bg-[#111111] mx-auto" />
          </div>

          <div className="space-y-2 w-full">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
          </div>
          <div className="space-y-2 w-full">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-3/4" />
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-3.5">
          <div className="h-4 bg-[#333] rounded-sm w-1/2 mb-2" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-3/4" />
          </div>
          <div className="h-3.5 bg-[#222] rounded-sm w-2/3 my-2.5" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-5/6" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
          </div>
        </div>

        {/* Column 5 */}
        <div className="space-y-3.5">
          <div className="h-4 bg-[#222] rounded-sm w-3/4 mb-2" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-11/12" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-4/5" />
          </div>
          <div className="h-3.5 bg-[#333] rounded-sm w-1/2 my-2.5" />
          <div className="space-y-2">
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
            <div className="h-2.5 bg-[#777] rounded-sm w-full" />
          </div>
        </div>
      </div>

      {/* Bottom Center Instructional Prompt with Soft Ambient Breathing Animation */}
      <div className="text-center pb-3 pt-5">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={
            phase === "SEARCHING"
              ? { opacity: [0.35, 0.85, 0.35], y: 0 }
              : { opacity: 0.8, y: 0 }
          }
          transition={
            phase === "SEARCHING"
              ? { repeat: Infinity, duration: 2.8, ease: "easeInOut" }
              : { duration: 0.5 }
          }
          className="font-mono-meta text-[11px] sm:text-[12px] tracking-[0.3em] font-semibold text-[#444444] uppercase inline-block"
        >
          TAKE THE GLASS &mdash; FIND THE SUBJECT
        </motion.span>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {phase !== "FINISHED" && (
        <motion.div
          key="detective-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] overflow-hidden select-none bg-[#ECE7DA] cursor-none"
        >
          {/* SKIP BUTTON WITH [ESC] KEY BADGE */}
          <button
            onClick={() => onComplete()}
            className="fixed top-6 right-6 z-[10000] bg-[#FAF7F2] text-[#222222] hover:bg-[#111111] hover:text-[#FAF7F2] border border-[#CCCCCC] hover:border-[#111111] px-4 py-2 font-mono-meta text-xs tracking-widest uppercase font-bold transition-all shadow-sm cursor-pointer flex items-center gap-2 rounded-sm"
          >
            <span>SKIP INTRO</span>
            <span className="text-[9.5px] border border-[#AAAAAA] px-1.5 py-0.5 rounded font-mono text-[#666666] bg-[#FFFFFF]/70">
              ESC
            </span>
            <span>&rarr;</span>
          </button>

          {(phase === "SEARCHING" || phase === "LOCKING" || phase === "PAUSED") && (
            <div className="relative w-full h-full">
              {/* LAYER 1: BLURRED NEWSPAPER BACKGROUND */}
              <div className="absolute inset-0 w-full h-full filter blur-[9px] grayscale-[0.35] opacity-90 pointer-events-none">
                {renderNewspaperGrid(false)}
              </div>

              {/* SPOTLIGHT FLASHLIGHT OVERLAY — follows lens position in real-time */}
              <div
                className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 340px at ${lensState.x}px ${lensState.y}px, rgba(255, 253, 245, 0.55) 0%, rgba(225, 218, 202, 0.25) 45%, rgba(15, 12, 8, 0.45) 100%)`,
                }}
              />

              {/* LAYER 2: CLEAN SIMPLE MAGNIFYING GLASS */}
              <div
                className="absolute pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
                style={{
                  transform: `translate3d(${lensState.x + shakeOffset.x}px, ${lensState.y + shakeOffset.y}px, 0) rotate(${lensState.rotation + shakeOffset.rotate}deg)`,
                  left: 0,
                  top: 0,
                }}
              >
                <div className="relative w-[175px] h-[175px]">
                  {/* Single soft drop shadow */}
                  <div className="absolute inset-0 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />

                  {/* Simple black ring lens frame */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-[9px] border-[#111111] bg-[#ECE7DA] z-10">
                    {/* Single subtle glare streak */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 rounded-full z-20 pointer-events-none transition-transform duration-100"
                      style={{ transform: `translateX(${lensState.glareShift}px)` }}
                    />

                    {/* MAGNIFIED sharp newspaper inside lens */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        width: `${window.innerWidth}px`,
                        height: `${window.innerHeight}px`,
                        transform: `translate(calc(-${lensState.x}px * 1.4 + 87.5px), calc(-${lensState.y}px * 1.4 + 87.5px)) scale(1.4)`,
                        transformOrigin: "0 0",
                      }}
                    >
                      {renderNewspaperGrid(true)}
                    </div>
                  </div>

                  {/* HANDLE — pivot placed on ring circumference */}
                  <div
                    className="absolute z-0"
                    style={{
                      left: "85.4%",
                      top: "85.4%",
                      width: 0,
                      height: 0,
                      transform: "rotate(-50deg)",
                      transformOrigin: "0 0",
                    }}
                  >
                    <div className="w-[18px] h-[85px] bg-[#111111] rounded-b-[4px]" style={{ marginLeft: "0px" }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {(phase === "WHITE_PAGE" || phase === "STAMPING" || phase === "BURNING") && (
            <motion.div
              className="absolute inset-0 w-full h-full bg-[#FAF7F2]"
              animate={
                phase === "BURNING"
                  ? {
                      clipPath: [
                        "circle(150% at 50% 50%)",
                        "circle(35% at 50% 50%)",
                        "circle(0% at 50% 50%)",
                      ],
                      filter: [
                        "contrast(1) brightness(1)",
                        "contrast(2) brightness(1.4) sepia(0.8)",
                        "contrast(3) brightness(0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.85, ease: "easeInOut" }}
            >
              <AnimatePresence>
                {(phase === "STAMPING" || phase === "BURNING") && (
                  <motion.div
                    initial={{ scale: 3.2, opacity: 0, rotate: -12, y: -45 }}
                    animate={{ scale: 1, opacity: 1, rotate: -5, y: 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                    className="fixed inset-0 flex items-center justify-center pointer-events-none z-[10000]"
                  >
                    <div className="relative px-10 py-5">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                        <path
                          d="M8,10 C60,4 120,12 180,6 C240,2 320,10 392,6
                             C388,30 394,55 390,80 C395,95 386,110 392,112
                             C320,118 240,108 180,116 C120,120 60,112 8,118
                             C4,95 10,70 6,45 C2,25 12,15 8,10 Z"
                          fill="#FAF7F2" stroke="#A8382B" strokeWidth="4"
                        />
                      </svg>
                      <span className="relative font-newspaper text-5xl sm:text-7xl font-extrabold text-[#A8382B] tracking-[0.25em] uppercase block">
                        IDENTIFIED
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};