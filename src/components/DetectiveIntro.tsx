import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DetectiveIntroProps {
  onComplete: () => void;
}

type Phase = "SEARCHING" | "LOCKING" | "PAUSED" | "WHITE_PAGE" | "STAMPING" | "BURNING" | "FINISHED";

export const DetectiveIntro: React.FC<DetectiveIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("SEARCHING");

  const mousePosRef = useRef({ x: -9999, y: -9999 });
  const lensPosRef = useRef({ x: -9999, y: -9999 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(0);
  const idleTimeRef = useRef(0);
  const initializedRef = useRef(false);

  const [lensState, setLensState] = useState({
    x: -9999,
    y: -9999,
    rotation: 0,
    glareShift: 0,
  });

  const targetRef = useRef<HTMLDivElement | null>(null);
  const [targetCenter, setTargetCenter] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [shakeOffset, setShakeOffset] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    // Lock body & html scroll completely while intro sequence is active
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalTouchAction = document.body.style.touchAction;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      onComplete();
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onComplete();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || "";
      document.body.style.position = originalPosition || "";
      document.body.style.width = originalWidth || "";
      document.body.style.touchAction = originalTouchAction || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      window.scrollTo(0, 0);
      window.removeEventListener("keydown", handleKeyDown);
    };
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

      if (!initializedRef.current) {
        initializedRef.current = true;
        lensPosRef.current = { x: e.clientX, y: e.clientY };
        velocityRef.current = { x: 0, y: 0 };
        setLensState({ x: e.clientX, y: e.clientY, rotation: 0, glareShift: 0 });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      if (phase !== "SEARCHING") return;
      if (e.touches.length > 0) {
        const tx = e.touches[0].clientX;
        const ty = e.touches[0].clientY;
        mousePosRef.current = { x: tx, y: ty };

        if (!initializedRef.current) {
          initializedRef.current = true;
          lensPosRef.current = { x: tx, y: ty };
          velocityRef.current = { x: 0, y: 0 };
          setLensState({ x: tx, y: ty, rotation: 0, glareShift: 0 });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [phase]);

  useEffect(() => {
    let animId: number;
    const stiffness = 0.05; // Slower, smoother spring tension
    const damping = 0.83;   // Luxurious smooth physical damping

    const loop = () => {
      if (phase === "SEARCHING" && initializedRef.current) {
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

        let curTargetX = targetCenter.x;
        let curTargetY = targetCenter.y;

        if (targetRef.current) {
          const rect = targetRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            curTargetX = rect.left + rect.width / 2;
            curTargetY = rect.top + rect.height / 2;
          }
        }

        const distToTarget = Math.hypot(
          lensPosRef.current.x - curTargetX,
          lensPosRef.current.y - curTargetY
        );

        if (distToTarget < 95) {
          setPhase("LOCKING");
        }
      } else if (phase === "LOCKING") {
        let curTargetX = targetCenter.x;
        let curTargetY = targetCenter.y;

        if (targetRef.current) {
          const rect = targetRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            curTargetX = rect.left + rect.width / 2;
            curTargetY = rect.top + rect.height / 2;
          }
        }

        const dx = curTargetX - lensPosRef.current.x;
        const dy = curTargetY - lensPosRef.current.y;

        lensPosRef.current.x += dx * 0.18;
        lensPosRef.current.y += dy * 0.18;

        rotationRef.current += (0 - rotationRef.current) * 0.2;

        setLensState({
          x: lensPosRef.current.x,
          y: lensPosRef.current.y,
          rotation: rotationRef.current,
          glareShift: 0,
        });

        if (Math.hypot(dx, dy) < 2) {
          lensPosRef.current = { x: curTargetX, y: curTargetY };
          setLensState({ x: curTargetX, y: curTargetY, rotation: 0, glareShift: 0 });
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
        // Continuous detective inspection shake for exactly 2 seconds
        if (shakeCount <= 38) {
          setShakeOffset({
            x: (Math.random() - 0.5) * 7,
            y: (Math.random() - 0.5) * 7,
            rotate: (Math.random() - 0.5) * 3,
          });
        } else {
          setShakeOffset({ x: 0, y: 0, rotate: 0 });
        }
      }, 50);

      const pauseTimer = setTimeout(() => {
        clearInterval(shakeInterval);
        setShakeOffset({ x: 0, y: 0, rotate: 0 });
        setPhase("WHITE_PAGE");
      }, 2000);

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

  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [viewportHeight, setViewportHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 800);

  useEffect(() => {
    const checkSize = () => {
      setViewportHeight(window.innerHeight);
      const w = window.innerWidth;
      if (w < 640) {
        setScreenSize("mobile");
      } else if (w < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  // Dynamic counts based on viewport height to continuously fill column height with zero empty space
  const mobileCount = Math.max(16, Math.ceil(viewportHeight / 55));
  const tabletCount = Math.max(12, Math.ceil(viewportHeight / 80));
  const desktopCount = Math.max(8, Math.ceil(viewportHeight / 100));

  // Programmatic Article Column Generator
  const ArticleColumn = ({
    count,
    colIndex,
    isMobile,
    hasWanted,
    isSharp,
  }: {
    count: number;
    colIndex: number;
    isMobile?: boolean;
    hasWanted?: boolean;
    isSharp?: boolean;
  }) => {
    const headlineH = isMobile ? "h-3" : "h-3.5";
    const paraH = isMobile ? "h-1.5" : "h-2.5";
    const spaceY = isMobile ? "space-y-1.5" : "space-y-2";

    const getHeadlineWidth = (idx: number) => {
      const widths = ["w-3/4", "w-2/3", "w-4/5", "w-1/2", "w-3/5"];
      return widths[(idx + colIndex * 2) % widths.length];
    };

    const getParaWidths = (idx: number) => {
      const patterns = [
        ["w-full", "w-11/12", "w-full", "w-4/5"],
        ["w-full", "w-full", "w-5/6"],
        ["w-full", "w-3/4"],
        ["w-full", "w-11/12", "w-3/4"],
      ];
      return patterns[(idx + colIndex) % patterns.length];
    };

    const wantedIndex = Math.floor(count * (isMobile ? 0.35 : 0.40));

    return (
      <div className={`flex flex-col ${isMobile ? "space-y-2" : "space-y-3.5"} overflow-hidden h-full`}>
        {Array.from({ length: count }).map((_, idx) => {
          const isWantedPosition = hasWanted && idx === wantedIndex;
          const headW = getHeadlineWidth(idx);
          const paraWList = getParaWidths(idx);

          return (
            <React.Fragment key={idx}>
              {isWantedPosition ? (
                <div
                  ref={isSharp ? null : targetRef}
                  className={`my-2 py-2 px-3 text-center border-y-2 border-[#111111] ${
                    isMobile ? "w-[118px]" : "w-[135px]"
                  } flex flex-col items-center justify-center bg-[#F7F3EA] shadow-2xs mx-auto shrink-0`}
                >
                  <span className="font-serif font-extrabold text-[11px] sm:text-[12.5px] text-[#A8382B] tracking-[0.2em] uppercase block leading-none mb-1">
                    WANTED
                  </span>
                  <span className="font-serif text-[11.5px] sm:text-[13px] text-[#111111] font-bold tracking-wide block leading-tight mb-1">
                    Krish Ramanandi
                  </span>
                  <div className="w-6 h-[1.5px] bg-[#111111] mx-auto" />
                </div>
              ) : (
                <div className="shrink-0">
                  <div className={`${headlineH} bg-[#222] rounded-xs ${headW} mb-1`} />
                  <div className={spaceY}>
                    {paraWList.map((pw, pIdx) => (
                      <div key={pIdx} className={`${paraH} bg-[#777] rounded-xs ${pw}`} />
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  // 1. DESKTOP NEWSPAPER GRID (5 Columns)
  const renderDesktopNewspaper = (isSharp: boolean) => (
    <div className="w-full h-full min-h-screen bg-[#ECE7DA] px-8 py-8 flex flex-col justify-between select-none overflow-hidden">
      {/* Top masthead rule */}
      <div className="max-w-[1300px] mx-auto w-full border-b-2 border-[#111111] pb-3 mb-6 flex justify-between items-center shrink-0">
        <span className="font-mono-meta text-[10px] tracking-[0.3em] text-[#333] uppercase font-bold">THE INVESTIGATION EDITION</span>
        <span className="font-mono-meta text-[10px] tracking-[0.3em] text-[#333] uppercase font-bold">CLASSIFIED RECORDS &middot; EST. 2026</span>
      </div>

      <div className="grid grid-cols-5 gap-6 max-w-[1300px] mx-auto w-full flex-1 overflow-hidden">
        <ArticleColumn count={desktopCount} colIndex={0} />
        <ArticleColumn count={desktopCount} colIndex={1} />
        <ArticleColumn count={desktopCount} colIndex={2} hasWanted={true} isSharp={isSharp} />
        <ArticleColumn count={desktopCount} colIndex={3} />
        <ArticleColumn count={desktopCount} colIndex={4} />
      </div>
    </div>
  );

  // 2. TABLET NEWSPAPER GRID (4 Columns)
  const renderTabletNewspaper = (isSharp: boolean) => (
    <div className="w-full h-full min-h-screen bg-[#ECE7DA] px-6 py-6 flex flex-col justify-between select-none overflow-hidden">
      <div className="max-w-[900px] mx-auto w-full border-b-2 border-[#111111] pb-2.5 mb-5 flex justify-between items-center shrink-0">
        <span className="font-mono-meta text-[9.5px] tracking-[0.25em] text-[#333] uppercase font-bold">THE INVESTIGATION EDITION</span>
        <span className="font-mono-meta text-[9.5px] tracking-[0.25em] text-[#333] uppercase font-bold">CLASSIFIED RECORDS &middot; EST. 2026</span>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-[900px] mx-auto w-full flex-1 overflow-hidden">
        <ArticleColumn count={tabletCount} colIndex={0} />
        <ArticleColumn count={tabletCount} colIndex={1} hasWanted={true} isSharp={isSharp} />
        <ArticleColumn count={tabletCount} colIndex={2} />
        <ArticleColumn count={tabletCount} colIndex={3} />
      </div>
    </div>
  );

  // 3. MOBILE NEWSPAPER GRID (3 Columns — High Density)
  const renderMobileNewspaper = (isSharp: boolean) => (
    <div className="w-full h-full min-h-screen bg-[#ECE7DA] px-3.5 py-4 flex flex-col justify-between select-none overflow-hidden">
      {/* Top masthead rule */}
      <div className="w-full border-b border-[#111111] pb-2 mb-3 flex justify-between items-center shrink-0">
        <span className="font-mono-meta text-[8.5px] tracking-[0.2em] text-[#333] uppercase font-bold">THE INVESTIGATION EDITION</span>
        <span className="font-mono-meta text-[8.5px] tracking-[0.2em] text-[#333] uppercase font-bold">EST. 2026</span>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full flex-1 overflow-hidden">
        <ArticleColumn count={mobileCount} colIndex={0} isMobile={true} />
        <ArticleColumn count={mobileCount} colIndex={1} isMobile={true} hasWanted={true} isSharp={isSharp} />
        <ArticleColumn count={mobileCount} colIndex={2} isMobile={true} />
      </div>
    </div>
  );

  const renderNewspaperGrid = (isSharp: boolean) => {
    if (isMobile) return renderMobileNewspaper(isSharp);
    if (isTablet) return renderTabletNewspaper(isSharp);
    return renderDesktopNewspaper(isSharp);
  };

  return (
    <AnimatePresence>
      {phase !== "FINISHED" && (
        <motion.div
          key="detective-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] overflow-hidden select-none bg-[#ECE7DA] cursor-none touch-none"
          onTouchMove={(e) => {
            if (e.cancelable) e.preventDefault();
          }}
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

          {/* UNBLURRED ALWAYS-VISIBLE BOTTOM INSTRUCTION BADGE */}
          {(phase === "SEARCHING" || phase === "LOCKING" || phase === "PAUSED") && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none text-center">
              <span className="font-mono-meta text-[11px] sm:text-[12px] tracking-[0.3em] font-extrabold text-[#111111] uppercase inline-block bg-[#FAF7F2] px-5 py-2 border-2 border-[#111111] rounded-xs shadow-md">
                TAKE THE GLASS &mdash; FIND THE SUBJECT
              </span>
            </div>
          )}

          {(phase === "SEARCHING" || phase === "LOCKING" || phase === "PAUSED") && (
            <div className="relative w-full h-full">
              {/* LAYER 1: BLURRED NEWSPAPER BACKGROUND */}
              <div className="absolute inset-0 w-full h-full filter blur-[9px] grayscale-[0.35] opacity-90 pointer-events-none transform-gpu will-change-transform">
                {renderNewspaperGrid(false)}
              </div>

              {/* SPOTLIGHT FLASHLIGHT OVERLAY — hidden until real cursor position known */}
              {initializedRef.current && (
                <div
                  className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 520px at ${lensState.x}px ${lensState.y}px,
                      rgba(255, 253, 245, 0.55) 0%,
                      rgba(250, 246, 235, 0.48) 12%,
                      rgba(240, 234, 218, 0.38) 26%,
                      rgba(220, 210, 190, 0.28) 42%,
                      rgba(180, 170, 150, 0.20) 58%,
                      rgba(120, 112, 96, 0.30) 75%,
                      rgba(60, 55, 46, 0.42) 90%,
                      rgba(15, 12, 8, 0.48) 100%)`,
                    filter: "blur(30px)",
                  }}
                />
              )}

              {/* LAYER 2: CLEAN SIMPLE MAGNIFYING GLASS — hidden on mobile layout */}
              {initializedRef.current && (
                <div
                  className="hidden md:block absolute pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
                  style={{
                    transform: `translate3d(${lensState.x + shakeOffset.x}px, ${lensState.y + shakeOffset.y}px, 0) rotate(${lensState.rotation + shakeOffset.rotate}deg)`,
                    left: 0,
                    top: 0,
                  }}
                >
                  <div className="relative w-[175px] h-[175px]">
                    <div className="absolute inset-0 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />

                    <div className="relative w-full h-full rounded-full overflow-hidden border-[9px] border-[#111111] bg-[#ECE7DA] z-10">
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 rounded-full z-20 pointer-events-none transition-transform duration-100"
                        style={{ transform: `translateX(${lensState.glareShift}px)` }}
                      />

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
              )}
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