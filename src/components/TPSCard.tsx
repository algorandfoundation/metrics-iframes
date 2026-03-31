import {
  useTransactionsPerSecond,
  useAverageRoundTime,
} from "@d13co/algo-metrics-react";
import { FlipCard } from "./FlipCard";
import { formatTPS } from "../lib/format";

export function TPSCard() {
  const tps = useTransactionsPerSecond();
  const averageRoundTime = useAverageRoundTime();
  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Transactions Per Second
      </p>
      {tps !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {formatTPS(tps)}
          </span>
          <span className="text-card-label text-lg">tx/s</span>
        </div>
      ) : (
        <div className="h-10 w-24 bg-card-border rounded animate-pulse" />
      )}
    </div>
  );

  const windowMinutes =
    averageRoundTime !== null
      ? Math.round((1000 * averageRoundTime) / 60)
      : null;

  const back = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-body text-sm leading-relaxed">
        Transactions per second is calculated live over the past 1,000 rounds
        {windowMinutes !== null ? ` (~${windowMinutes} minutes)` : ""} on the
        Algorand blockchain by dividing the total transaction count in the window
        by the elapsed time.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
