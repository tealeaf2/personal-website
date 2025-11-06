import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import HomePage from "@/components/Pages/Homepage"
import Food from "./components/Pages/Food"
import Projects from "./components/Pages/Projects"
import AppSideBar from "./components/Globals/AppSidebar"

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex h-screen">
        <SidebarProvider>
          <AppSideBar />
          <main className="flex-grow overflow-auto p-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/food" element={<Food />} />
          </Routes>
          </main>
        </SidebarProvider>
      </div>
      </BrowserRouter>
    </>
  )
}
 
export default App