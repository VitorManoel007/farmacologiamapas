import { Switch, Route } from "wouter";
import { Lp } from "@/pages/Lp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Lp} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
