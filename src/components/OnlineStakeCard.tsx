import { useOnlineStake } from "@d13co/algo-metrics-react";
import { FlipCard } from "./FlipCard";
import { formatStake } from "../lib/format";

export function OnlineStakeCard() {
  const onlineStake = useOnlineStake();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Online Stake
      </p>
      {onlineStake !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {formatStake(onlineStake)}
          </span>
          <span className="text-card-label text-lg">ALGO</span>
        </div>
      ) : (
        <div className="h-10 w-24 bg-card-border rounded animate-pulse" />
      )}
    </div>
  );

  const back = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-body text-sm leading-relaxed">
        The total amount of Algo actively participating in consensus. This is
        fetched from the ledger state delta and updated every 10 rounds.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
