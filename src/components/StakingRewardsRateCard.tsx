import { useStakingRewardsRate } from "../hooks/useStakingRewardsRate";
import { FlipCard } from "./FlipCard";

export function StakingRewardsRateCard() {
  const rate = useStakingRewardsRate();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Staking Rewards Rate
      </p>
      {rate !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {(rate * 100).toFixed(2)}
          </span>
          <span className="text-card-label text-lg">%</span>
        </div>
      ) : (
        <div className="h-10 w-24 bg-card-border rounded animate-pulse" />
      )}
    </div>
  );

  const back = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-body text-sm leading-relaxed">
        The annualized staking rewards rate, calculated from the current block
        incentive, average round time, and total online stake.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
