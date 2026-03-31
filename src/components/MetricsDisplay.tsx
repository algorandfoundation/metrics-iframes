import { AverageRoundTimeCard } from "./AverageRoundTimeCard";
import { TPSCard } from "./TPSCard";

export function MetricsDisplay() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-8 items-stretch">
      <div className="flex-1">
        <AverageRoundTimeCard />
      </div>
      <div className="flex-1">
        <TPSCard />
      </div>
    </div>
  );
}
