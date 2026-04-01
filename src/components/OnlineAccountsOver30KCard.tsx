import { useOnlineAccounts } from "../hooks/useOnlineAccounts";
import { FlipCard } from "./FlipCard";

export function OnlineAccountsOver30KCard() {
  const data = useOnlineAccounts();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Online Accounts Over 30K
      </p>
      {data !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {data.onlineAccountsOver30K.toLocaleString()}
          </span>
        </div>
      ) : (
        <div className="h-10 w-24 bg-card-border rounded animate-pulse" />
      )}
    </div>
  );

  const back = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-body text-sm leading-relaxed">
        The number of online consensus-participating accounts holding at least
        30,000 Algo — the minimum stake required to receive block proposal
        rewards.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
