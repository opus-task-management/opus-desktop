import { Inbox, Search } from "lucide-react";

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
import { AddTaskDialog } from "./AddTaskDialog";
import type { Task } from "./models/task";
import { SearchTaskDialog } from "./SearchTaskDialog";

const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
    usesDialog: true,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    usesDialog: false,
  },
];

interface AppSidebarProps {
  addTask: (task: string) => void;
  searchForTasks: (searchTerm: string) => Task[];
}

export function AppSidebar(props: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Opus</SidebarGroupLabel>
          <SidebarGroupAction>
            <AddTaskDialog addTask={props.addTask} />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.usesDialog ? (
                    <SearchTaskDialog searchForTask={props.searchForTasks} />
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
