import { HashRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import HomePage from "@/components/Pages/Homepage"
import Dance from "./components/Pages/Dance"
import Projects from "./components/Pages/Projects"
import AppSideBar from "./components/Globals/AppSidebar"

function App() {
  return (
    <>
      <HashRouter basename="/personal-website/">
      <div className="flex h-screen">
        <SidebarProvider>
          <AppSideBar />
          <main className="flex-grow overflow-auto p-2 lg:px-30 md:px-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dance" element={<Dance />} />
          </Routes>
          </main>
        </SidebarProvider>
      </div>
      </HashRouter>
    </>
  )
}
 
export default App