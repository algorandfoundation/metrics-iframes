import { useOnlineAccounts } from "../hooks/useOnlineAccounts";
import { FlipCard } from "./FlipCard";

export function OnlineAccountsCard() {
  const data = useOnlineAccounts();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Online Accounts
      </p>
      {data !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {data.onlineAccounts.toLocaleString()}
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
        The number of accounts currently registered as online and participating
        in consensus on the Algorand network.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
