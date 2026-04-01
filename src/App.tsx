import { AlgoMetricsProvider } from "@d13co/algo-metrics-react";
import { MetricsDisplay } from "./components/MetricsDisplay";
import { StakeDisplay } from "./components/StakeDisplay";
import { HomeDisplay } from "./components/HomeDisplay";

const path = window.location.pathname.replace(/\/$/, "") || "/";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-6xl font-bold text-card-value mb-4">404</h1>
      <p className="text-card-label text-lg">Page not found</p>
    </div>
  );
}

const routes: Record<string, () => JSX.Element> = {
  "/": () => <MetricsDisplay />,
  "/art-tps": () => <MetricsDisplay />,
  "/stake": () => <StakeDisplay />,
  "/home": () => <HomeDisplay />,
};

function Route() {
  const render = routes[path];
  return render ? render() : <NotFound />;
}

export default function App() {
  return (
    <AlgoMetricsProvider>
      <Route />
    </AlgoMetricsProvider>
  );
}
