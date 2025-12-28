import { Switch, Route, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/home";
import RightsPage from "@/pages/rights";
import InjuriesPage from "@/pages/injuries";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import RightsListPage from "@/pages/rights-list";
import DutiesListPage from "@/pages/duties-list";
import WhatAreInjuriesPage from "@/pages/injuries-what-are";
import CausesPage from "@/pages/injuries-causes";
import StagesPage from "@/pages/injuries-stages";
import RiskPage from "@/pages/injuries-risk";
import ClassRisk from "@/pages/injuries-class";
import PreventionPage from "@/pages/injuries-prevention";
import AlarmsPage from "@/pages/alarms";
import PatientsPage from "@/pages/patients";
import PatientsListPage from "@/pages/patients-list";
import SobrePage from "@/pages/Sobre";

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
        
        <Route path="/rights/list">
           <Layout><RightsListPage /></Layout>
        </Route>

        <Route path="/duties/list">
           <Layout><DutiesListPage /></Layout>
        </Route>

        <Route path="/injuries">
           <Layout><InjuriesPage /></Layout>
        </Route>

        <Route path="/injuries/what-are">
           <Layout><WhatAreInjuriesPage /></Layout>
        </Route>

        <Route path="/injuries/causes">
           <Layout><CausesPage /></Layout>
        </Route>

        <Route path="/injuries/stages">
           <Layout><StagesPage /></Layout>
        </Route>

        <Route path="/injuries/risk">
           <Layout><RiskPage /></Layout>
        </Route>

         <Route path="/injuries/class">
           <Layout><ClassRisk/></Layout>
        </Route>
        <Route path="/injuries/prevention">
           <Layout><PreventionPage /></Layout>
        </Route>

        {/* Placeholders for other routes */}
        <Route path="/prevention">
           <Layout><PreventionPage /></Layout> 
        </Route>
        <Route path="/alarms">
           <Layout><AlarmsPage /></Layout>
        </Route>
         <Route path="/search">
           <Layout><HomePage /></Layout> {/* Reusing layout for now */}
        </Route>
        <Route path="/patients">
           <Layout><PatientsListPage /></Layout>
        </Route>
           <Route path="/sobre">
              <Layout><SobrePage /></Layout>
           </Route>
        <Route path="/patients/new">
           <Layout><PatientsPage /></Layout>
        </Route>

        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
