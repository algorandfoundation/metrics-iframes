import { useState, useEffect } from "react";

const SUPPLY_URL = "https://metricsapi.algorand.foundation/v1/supply";
const POLL_INTERVAL = 2 * 60 * 1000;

export function useCirculatingSupply() {
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(
    null
  );

  useEffect(() => {
    let cancelled = false;

    async function fetchSupply() {
      try {
        const res = await fetch(SUPPLY_URL);
        const data = await res.json();
        if (!cancelled) {
          setCirculatingSupply(data.CirculatingSupply);
        }
      } catch {
        // silently retry on next interval
      }
    }

    fetchSupply();
    const id = setInterval(fetchSupply, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return circulatingSupply;
}
