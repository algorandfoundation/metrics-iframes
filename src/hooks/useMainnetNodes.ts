import { useState, useEffect } from "react";

const URL = "https://afmetrics.api.nodely.io/v1/delayed/network/nodes/count";
const POLL_INTERVAL = 2 * 60 * 1000;

export function useMainnetNodes() {
  const [nodes, setNodes] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchNodes() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (!cancelled) {
          setNodes(data.nodes);
        }
      } catch {
        // retry on next interval
      }
    }

    fetchNodes();
    const id = setInterval(fetchNodes, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return nodes;
}
