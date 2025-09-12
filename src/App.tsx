import "./App.css";
import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { cn } from "./lib/utils";
import type { Task } from "./models/task";
import { Pencil } from "lucide-react";
import { Button } from "./components/ui/button";

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
        <div className="flex flex-col gap-6 items-center mx-auto max-w-md h-[80%] mt-10 overflow-y-auto pr-2">
          {tasks.map((task) => (
            <div
              key={`task-container-${task.id}`}
              className="group flex gap-3 items-start gap-3 w-full border-b py-2 relative"
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
              <Pencil
                className="absolute right-2 bottom-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer w-4 h-4"
                onClick={() => alert("edit")}
              />
            </div>
          ))}
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
