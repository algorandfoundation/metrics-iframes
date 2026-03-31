import { AlgoMetricsProvider } from "@d13co/algo-metrics-react";
import { MetricsDisplay } from "./components/MetricsDisplay";

export default function App() {
  return (
    <AlgoMetricsProvider>
      <MetricsDisplay />
    </AlgoMetricsProvider>
  );
}
