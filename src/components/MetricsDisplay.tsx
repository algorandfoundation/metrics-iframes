import { AverageRoundTimeCard } from "./AverageRoundTimeCard";
import { TPSCard } from "./TPSCard";
import { TotalTransactionsCard } from "./TotalTransactionsCard";
import { OnlineStakeCard } from "./OnlineStakeCard";

export function MetricsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
      <AverageRoundTimeCard />
      <TPSCard />
      <TotalTransactionsCard />
      <OnlineStakeCard />
    </div>
  );
}
