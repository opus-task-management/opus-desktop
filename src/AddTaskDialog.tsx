import { Settings, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";

interface AddTaskDialogProps {
  addTask: (task: string) => void;
}

export function AddTaskDialog(props: AddTaskDialogProps) {
  const [name, setName] = useState("");

  const addTask = () => {
    props.addTask(name);
    setName("");
  };

  return (
    <Dialog>
      <Settings className={cn("mr-2")} />{" "}
      <span className="sr-only">Open Settings</span>
      <DialogTrigger asChild>
        <Plus className={cn("mr-5")} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <Input
            id="name-1"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={addTask}>
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
