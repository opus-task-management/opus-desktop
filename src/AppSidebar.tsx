import { Inbox, Plus, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";

const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
];

interface AppSidebarProps {
  addTask: (task: string) => void;
}

export function AppSidebar(props: AppSidebarProps) {
  const [name, setName] = useState("");

  const addTask = () => props.addTask(name);

  console.log(name);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Opus</SidebarGroupLabel>
          <SidebarGroupAction>
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
                  <DialogClose>
                    <Button type="submit" onClick={addTask}>
                      Add
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
