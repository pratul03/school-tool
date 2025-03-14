"use client";

import {
  BadgeCheck,
  BarChart,
  Bell,
  BookOpen,
  BusIcon,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  HardDriveDownload,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  ReceiptIndianRupee,
  Settings,
  Sparkles,
  UserCog,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const user = {
    name: "pm",
    email: "pm@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  const sidebarLinks = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      items: [{ title: "Overview", url: "/dashboard/overview" }],
    },
    {
      title: "Student Management",
      url: "/students",
      icon: Users,
      items: [
        { title: "Student Directory", url: "/dashboard/students" },
        { title: "Fees", url: "/dashboard/students/fees" },
        { title: "Student Ids", url: "/dashboard/students/ids" },
        { title: "Attendance", url: "/dashboard/students/attendance" },
      ],
    },
    {
      title: "Academics",
      url: "/academics",
      icon: BookOpen,
      items: [
        { title: "Curriculum", url: "/academics/curriculum" },
        { title: "Timetable", url: "/academics/timetable" },
        { title: "Examinations", url: "/academics/examinations" },
        { title: "Assignments", url: "/academics/assignments" },
        { title: "Report Cards", url: "/academics/report-cards" },
      ],
    },
    {
      title: "Staff Management",
      url: "/staff",
      icon: UserCog,
      items: [
        { title: "Staff Directory", url: "/staff/directory" },
        { title: "Attendance", url: "/staff/attendance" },
        { title: "Leave Management", url: "/staff/leave" },
        { title: "Performance", url: "/staff/performance" },
      ],
    },
    {
      title: "Communication",
      url: "/communication",
      icon: MessageSquare,
      items: [
        { title: "Messages", url: "/communication/messages" },
        { title: "Announcements", url: "/communication/announcements" },
        { title: "Notice Board", url: "/communication/notice-board" },
        { title: "Emergency Alerts", url: "/communication/emergency" },
      ],
    },
    {
      title: "Finance",
      url: "/finance",
      icon: ReceiptIndianRupee,
      items: [
        { title: "Fee Management", url: "/finance/fees" },
        { title: "Payments", url: "/finance/payments" },
        { title: "Scholarships", url: "/finance/scholarships" },
        { title: "Reports", url: "/finance/reports" },
      ],
    },
    {
      title: "Transport",
      url: "/transport",
      icon: BusIcon,
      items: [
        { title: "Routes", url: "/transport/routes" },
        { title: "Tracking", url: "/transport/tracking" },
        { title: "Drivers", url: "/transport/drivers" },
        { title: "Maintenance", url: "/transport/maintenance" },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      icon: HardDriveDownload,
      items: [
        { title: "Library", url: "/resources/library" },
        { title: "Inventory", url: "/resources/inventory" },
        { title: "Facilities", url: "/resources/facilities" },
        { title: "Assets", url: "/resources/assets" },
      ],
    },
    {
      title: "Reports & Analytics",
      url: "/reports",
      icon: BarChart,
      items: [
        { title: "Academic Reports", url: "/reports/academic" },
        { title: "Financial Reports", url: "/reports/financial" },
        { title: "Custom Reports", url: "/reports/custom" },
        { title: "Analytics Dashboard", url: "/reports/analytics" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        { title: "School Profile", url: "/settings/profile" },
        { title: "User Management", url: "/settings/users" },
        { title: "System Settings", url: "/settings/system" },
        { title: "Backup & Security", url: "/settings/security" },
      ],
    },
  ];

  const pathname = usePathname();
  return (
    <section>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <activeTeam.logo className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {activeTeam.name}
                      </span>
                      <span className="truncate text-xs">
                        {activeTeam.plan}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="start"
                  side="bottom"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Teams
                  </DropdownMenuLabel>
                  {data.teams.map((team, index) => (
                    <DropdownMenuItem
                      key={team.name}
                      onClick={() => setActiveTeam(team)}
                      className="gap-2 p-2"
                    >
                      <div className="flex size-6 items-center justify-center rounded-sm border">
                        <team.logo className="size-4 shrink-0" />
                      </div>
                      {team.name}
                      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 p-2">
                    <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                      <Plus className="size-4" />
                    </div>
                    <div className="font-medium text-muted-foreground">
                      Add team
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              <SidebarMenuButton size="lg" asChild>
                {/* <Link href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
                    <CommandIcon className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Acme Inc.</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </Link> */}
                <Logo className="mx-auto" iconSize={16} weight="semibold" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarLinks.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={pathname.startsWith(item.url)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          {/* <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {data.projects.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <Icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction showOnHover>
                          <MoreHorizontal />
                          <span className="sr-only">More</span>
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-48 rounded-lg"
                        side="bottom"
                        align="end"
                      >
                        <DropdownMenuItem>
                          <Folder className="text-muted-foreground" />
                          <span>View Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Forward className="text-muted-foreground" />
                          <span>Share Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="text-muted-foreground" />
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                );
              })}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-sidebar-foreground/70">
                  <MoreHorizontal className="text-sidebar-foreground/70" />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup> */}
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">PM</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="rounded-lg">
                          PM
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.name}
                        </span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </section>
  );
}
