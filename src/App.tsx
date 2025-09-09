import "./App.css";
import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { cn } from "./lib/utils";
import type { Task } from "./models/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [id, setId] = useState<number>(0);

  const addTask = (task: string) => {
    setTasks([
      ...tasks,
      {
        id: id,
        content: task,
      },
    ]);
    setId((id) => id + 1);
  };

  const removeTask = (task: Task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const searchForTask = (searchTerm: string): Task[] => {
    if (searchTerm.length === 0) {
      return tasks;
    }
    return tasks.filter((task) => task.content.includes(searchTerm));
  };

  return (
    <SidebarProvider>
      <AppSidebar addTask={addTask} searchForTasks={searchForTask} />
      <main className="w-full">
        <SidebarTrigger className={cn("mt-2.5 ml-1")} />
        <div className="flex flex-col gap-6 items-center mx-auto max-w-md h-[80%] mt-10 rounded-md">
          {tasks.map((task) => (
            <div
              key={`task-container-${task.id}`}
              className="flex gap-3 items-start gap-3 w-full"
            >
              <Checkbox
                id={`task-${task.id}`}
                onCheckedChange={(checked) => {
                  if (checked) {
                    removeTask(task);
                  }
                }}
              />
              <Label htmlFor={`task-${task.id}`}>{task.content}</Label>
            </div>
          ))}
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
