import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import PricingPage from "@/pages/pricing";
import ProfilePage from "@/pages/profile";
import HomePage from "@/pages/home";
import PricingGlassPage from "@/pages/pricing-glass";
import ProfileGlassPage from "@/pages/profile-glass";
import HomeGlassPage from "@/pages/home-glass";
import DrGrandAssist from "@/components/DrGrandAssist";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={PricingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/pricing-glass" component={PricingGlassPage} />
      <Route path="/profile-glass" component={ProfileGlassPage} />
      <Route path="/home-glass" component={HomeGlassPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <DrGrandAssist />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
