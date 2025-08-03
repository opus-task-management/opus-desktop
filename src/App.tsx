import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "./lib/utils";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className={cn("mt-2.5 ml-1")} />
      </main>
    </SidebarProvider>
  );
}

export default App;
