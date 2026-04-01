import { useCirculatingSupply } from "../hooks/useCirculatingSupply";
import { FlipCard } from "./FlipCard";
import { formatStake } from "../lib/format";

export function CirculatingSupplyCard() {
  const circulatingSupply = useCirculatingSupply();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Circulating Supply
      </p>
      {circulatingSupply !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {formatStake(BigInt(Math.round(circulatingSupply)))}
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
        The total amount of Algo currently in circulation on the Algorand
        network.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
