import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Biblioteca from "./pages/Biblioteca";
import AuthorProfile from "./pages/AuthorProfile";
import Article from "@/pages/Article";
import Upload from "@/pages/admin/Upload";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/foro"} component={Forum} />
      <Route path={"/foro/tema/:id"} component={Topic} />
      <Route path={"/biblioteca"} component={Biblioteca} />
      <Route path={"/biblioteca/:id"} component={AuthorProfile} />
      <Route path={"/biblioteca/texto/:slug"} component={Article} />
      <Route path={"/admin/subir"} component={Upload} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
