import { AlgoMetricsProvider } from "@d13co/algo-metrics-react";
import { MetricsDisplay } from "./components/MetricsDisplay";
import { StakeDisplay } from "./components/StakeDisplay";
import { HomeDisplay } from "./components/HomeDisplay";

const path = window.location.pathname;

function Route() {
  switch (path) {
    case "/stake":
      return <StakeDisplay />;
    case "/home":
      return <HomeDisplay />;
    default:
      return <MetricsDisplay />;
  }
}

export default function App() {
  return (
    <AlgoMetricsProvider>
      <Route />
    </AlgoMetricsProvider>
  );
}
