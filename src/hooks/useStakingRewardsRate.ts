import { useState, useEffect } from "react";
import {
  useAlgoMetricsContext,
  useAverageRoundTime,
  useLatestRound,
  useOnlineStake,
} from "@d13co/algo-metrics-react";

const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;

export function useStakingRewardsRate() {
  const { sdk } = useAlgoMetricsContext();
  const averageRoundTime = useAverageRoundTime();
  const latestRound = useLatestRound();
  const onlineStake = useOnlineStake();
  const [blockIncentive, setBlockIncentive] = useState<bigint | null>(null);
  const [lastFetchedRound, setLastFetchedRound] = useState<bigint | null>(null);

  useEffect(() => {
    if (!sdk || latestRound === null) return;
    if (lastFetchedRound !== null && latestRound - lastFetchedRound < 20n) return;
    let cancelled = false;

    async function fetchBi() {
      try {
        const resp = await sdk!.algorand.client.algod.block(latestRound!).do();
        const bi = resp.block.header.bonus;
        if (!cancelled) {
          setBlockIncentive(bi);
          setLastFetchedRound(latestRound);
        }
      } catch {
        // retry on next round
      }
    }

    fetchBi();
    return () => {
      cancelled = true;
    };
  }, [sdk, latestRound, lastFetchedRound]);

  if (
    averageRoundTime === null ||
    onlineStake === null ||
    onlineStake === 0n ||
    blockIncentive === null
  ) {
    return null;
  }

  const blocksPerYear = SECONDS_PER_YEAR / averageRoundTime;
  const rewardsPerYear = Number(blockIncentive) * blocksPerYear;
  const rate = rewardsPerYear / Number(onlineStake);

  return rate;
}
