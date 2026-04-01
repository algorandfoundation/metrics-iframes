import { useMainnetNodes } from "../hooks/useMainnetNodes";
import { FlipCard } from "./FlipCard";

export function MainnetNodesCard() {
  const nodes = useMainnetNodes();

  const front = (
    <div className="flex flex-col justify-center h-full">
      <p className="text-card-label text-sm uppercase tracking-wider mb-2">
        Mainnet Nodes
      </p>
      {nodes !== null ? (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-card-value">
            {nodes.toLocaleString()}
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
        The estimated number of nodes currently active on the Algorand mainnet.
      </p>
    </div>
  );

  return <FlipCard front={front} back={back} />;
}