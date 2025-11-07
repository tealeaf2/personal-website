import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"

const items = [
  { title: "home", url: "/"},
  { title: "projects", url: "/projects"},
  { title: "dance", url: "/dance"},
]

export default function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Sidebar collapsible="none">
      <SidebarContent className="justify-center">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = currentPath === item.url;
                return (
                <SidebarMenuItem key={item.title} className="hover:cursor-pointer">
                  <SidebarMenuButton asChild
                    isActive={isActive}
                    className="justify-end duration-200 transition-colors text-sm px-2"
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}