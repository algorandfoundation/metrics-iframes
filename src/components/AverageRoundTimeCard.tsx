import { useAverageRoundTime } from "@d13co/algo-metrics-react";
import { FlipCard } from "./FlipCard";
import { formatSeconds } from "../lib/format";

export function AverageRoundTimeCard() {
  const averageRoundTime = useAverageRoundTime();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Average Round Time
      </p>
      {averageRoundTime !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {formatSeconds(averageRoundTime)}
          </span>
          <span className="text-card-label text-lg">s</span>
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
        The average round time is calculated live from the most recent 1,000
        rounds{windowMinutes !== null ? ` (~${windowMinutes} minutes)` : ""} on
        the Algorand blockchain. It represents the mean time between consecutive
        blocks.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
