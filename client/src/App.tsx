import { Switch, Route, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/home";
import RightsPage from "@/pages/rights";
import InjuriesPage from "@/pages/injuries";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/">
           <Layout><HomePage /></Layout>
        </Route>

        <Route path="/home">
          <Layout><HomePage /></Layout>
        </Route>
        
        <Route path="/rights">
           <Layout><RightsPage /></Layout>
        </Route>

        <Route path="/injuries">
           <Layout><InjuriesPage /></Layout>
        </Route>

        {/* Placeholders for other routes */}
        <Route path="/prevention">
           <Layout><InjuriesPage /></Layout> {/* Reusing layout for now */}
        </Route>
        <Route path="/alarms">
           <Layout><HomePage /></Layout> {/* Reusing layout for now */}
        </Route>
         <Route path="/search">
           <Layout><HomePage /></Layout> {/* Reusing layout for now */}
        </Route>
         <Route path="/patients">
           <Layout><HomePage /></Layout> {/* Reusing layout for now */}
        </Route>

        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
