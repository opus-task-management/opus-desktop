import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { SidebarMenuButton } from "./components/ui/sidebar";
import type { Task } from "./models/task";

interface SearchTaskDialogProps {
  searchForTask: (searchTerm: string) => Task[];
}

export function SearchTaskDialog(props: SearchTaskDialogProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setTasks(props.searchForTask(searchTerm));
  }, [searchTerm, props]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton asChild>
          <a href={"#"}>
            <Search />
            <span>Search</span>
          </a>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <div className="min-h-100">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>

          <div className="grid gap-3 mt-5">
            <Input
              id="search-1"
              name="search"
              placeholder="Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mt-4 max-h-100 overflow-y-auto pr-2">
            {tasks.map((task) => (
              <div
                key={`task-container-${task.id}`}
                className="flex items-start gap-3 w-full border-b py-2"
              >
                <p>{task.content}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Found {tasks.length} tasks
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
