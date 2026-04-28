import { AverageRoundTimeCard } from "./AverageRoundTimeCard";
import { CirculatingSupplyCard } from "./CirculatingSupplyCard";
import { NetworkDowntimeCard } from "./NetworkDowntimeCard";
import { ForksCard } from "./ForksCard";

export function HomeDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AverageRoundTimeCard />
      <CirculatingSupplyCard />
      <NetworkDowntimeCard />
      <ForksCard />
    </div>
  );
}
