import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import type { Task } from "./models/task";

interface EditTaskDialogProps {
  current: Task;
  editTask: (task: string, id: number) => void;
}

export function EditTaskDialog({ current, editTask }: EditTaskDialogProps) {
  const [name, setName] = useState(current.content);

  useEffect(() => {
    setName(current.content);
  }, [current]);

  const handleEdit = () => {
    editTask(name, current.id);
    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="absolute right-2 bottom-1 w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-black" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <Input
            id="name-1"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={handleEdit}
              disabled={name.trim().length === 0}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
