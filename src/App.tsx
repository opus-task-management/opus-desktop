import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "./lib/utils";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <SidebarProvider>
      <AppSidebar addTask={addTask} />
      <main>
        <SidebarTrigger className={cn("mt-2.5 ml-1")} />
        {tasks.map((task) => (
          <div key={task}>{task}</div>
        ))}
      </main>
    </SidebarProvider>
  );
}

export default App;
