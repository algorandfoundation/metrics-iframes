import { useTransactionCount } from "@d13co/algo-metrics-react";
import { FlipCard } from "./FlipCard";
import { formatCount } from "../lib/format";

export function TotalTransactionsCard() {
  const transactionCount = useTransactionCount();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Total Transactions
      </p>
      {transactionCount !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {formatCount(transactionCount)}
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
        The total number of transactions processed on the Algorand blockchain
        since genesis.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
