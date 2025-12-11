import { Switch, Route, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import LoginPage from "@/pages/login";
import HomePage from "@/pages/home";
import ScanPage from "@/pages/scan";
import ResultsPage from "@/pages/results";
import ProfilePage from "@/pages/profile";
import HistoryPage from "@/pages/history";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [location] = useLocation();
  
  // Pages that don't need the standard layout wrapper with bottom nav
  const noLayoutPages = ["/scan", "/login"];
  const isNoLayout = noLayoutPages.includes(location);

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        
        {/* Main App Routes */}
        <Route path="/">
           {/* Redirect to login initially if needed, but for prototype go to login */}
           <LoginPage />
        </Route>

        <Route path="/home">
          <Layout><HomePage /></Layout>
        </Route>
        
        <Route path="/scan">
           {/* Scan page has its own immersive layout */}
           <MobileFrameWrapper><ScanPage /></MobileFrameWrapper>
        </Route>

        <Route path="/results">
          <Layout><ResultsPage /></Layout>
        </Route>

        <Route path="/profile">
          <Layout><ProfilePage /></Layout>
        </Route>

        <Route path="/history">
          <Layout><HistoryPage /></Layout>
        </Route>

        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

import { MobileFrame } from "@/components/layout/MobileFrame";
function MobileFrameWrapper({ children }: { children: React.ReactNode }) {
  return <MobileFrame>{children}</MobileFrame>;
}

export default App;
