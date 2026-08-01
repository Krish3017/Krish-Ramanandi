import { useState, useEffect } from "react";

interface WeatherState {
  temp: number | null;
  condition: string;
  loading: boolean;
}

export function useSuratWeather(): WeatherState {
  const [weather, setWeather] = useState<WeatherState>({
    temp: 31,
    condition: "SURAT WEATHER",
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=21.1702&longitude=72.8311&current_weather=true"
        );
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        if (data && data.current_weather && isMounted) {
          const rawTemp = Math.round(data.current_weather.temperature);
          const code = data.current_weather.weathercode;
          
          let cond = "CLEAR SKY";
          if (code >= 1 && code <= 3) cond = "PARTLY CLOUDY";
          else if (code >= 45 && code <= 48) cond = "FOGGY";
          else if (code >= 51 && code <= 67) cond = "RAINING";
          else if (code >= 80 && code <= 82) cond = "MONSOON SHOWERS";
          else if (code >= 95) cond = "THUNDERSTORM";

          setWeather({
            temp: rawTemp,
            condition: cond,
            loading: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          setWeather({
            temp: 32,
            condition: "HUMID / SUMMER",
            loading: false,
          });
        }
      }
    }

    fetchWeather();
    return () => {
      isMounted = false;
    };
  }, []);

  return weather;
}
