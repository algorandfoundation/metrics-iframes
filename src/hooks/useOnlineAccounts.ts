import { useState, useEffect } from "react";

const URL = "https://cons-data.pages.dev/latest.json";
const POLL_INTERVAL = 2 * 60 * 1000;
const THRESHOLD = 30_000; // 30K Algo

interface OnlineAccountsData {
  onlineAccounts: number;
  onlineAccountsOver30K: number;
  onlineStake: number;
}

export function useOnlineAccounts() {
  const [data, setData] = useState<OnlineAccountsData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAccounts() {
      try {
        const res = await fetch(URL);
        const json = await res.json();
        const accounts: { b: number }[] = json.onl;
        if (!cancelled) {
          setData({
            onlineAccounts: accounts.length,
            onlineAccountsOver30K: accounts.filter((a) => a.b >= THRESHOLD)
              .length,
            onlineStake: accounts.reduce((sum, a) => sum + a.b, 0),
          });
        }
      } catch {
        // silently retry on next interval
      }
    }

    fetchAccounts();
    const id = setInterval(fetchAccounts, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return data;
}
