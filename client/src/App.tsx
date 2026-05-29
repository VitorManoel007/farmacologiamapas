import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { metaPixel } from "@/lib/metaPixel";

import { Lp } from "@/pages/Lp";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Lp} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize Meta Pixel only once on app mount
    metaPixel.init().catch((error) => {
      console.error('[App] Meta Pixel initialization error:', error);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
