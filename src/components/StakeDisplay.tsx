import { MainnetNodesCard } from "./MainnetNodesCard";
import { OnlineStakeCard } from "./OnlineStakeCard";
import { OnlineAccountsCard } from "./OnlineAccountsCard";
import { OnlineAccountsOver30KCard } from "./OnlineAccountsOver30KCard";
import { StakingRewardsRateCard } from "./StakingRewardsRateCard";

export function StakeDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MainnetNodesCard />
      <OnlineStakeCard />
      <StakingRewardsRateCard />
      <OnlineAccountsCard />
      <OnlineAccountsOver30KCard />
    </div>
  );
}
