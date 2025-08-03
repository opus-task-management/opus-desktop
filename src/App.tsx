import "./App.css";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { cn } from "./lib/utils";
import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task: string) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <SidebarProvider>
      <AppSidebar addTask={addTask} />
      <main className="w-full">
        <SidebarTrigger className={cn("mt-2.5 ml-1")} />
        <div className="flex flex-col gap-6 items-center mx-auto max-w-5xl h-[80%] mt-10 rounded-md">
          {tasks.map((task, idx) => (
            <>
              <div className="flex gap-3 items-start gap-3 w-full">
                <Checkbox
                  id={task}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      removeTask(task);
                    }
                  }}
                />
                <Label htmlFor={`task-${idx}`}>{task}</Label>
              </div>
            </>
          ))}
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
