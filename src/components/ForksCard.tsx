import { FlipCard } from "./FlipCard";

export function ForksCard() {
  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Forks
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-card-value">0</span>
      </div>
    </div>
  );

  const back = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-body text-sm leading-relaxed">
        Algorand's pure proof-of-stake consensus guarantees immediate finality
        — blocks never fork.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}
