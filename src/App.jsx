import { Route, Routes } from "react-router"
import { Home } from "./Pages/Home"
import { Nav } from "./components/Nav"
import { Menu } from "./pages/Menu"
// import { Events } from "./Pages/Events"
import { Service } from './pages/service';
import { Footer } from "./components/Footer"
import { Events } from "./pages/Events";




function App() {
  return (
    <div className="overflow-hidden">
       <Nav/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Service" element={<Service/>}/>
          {/* <Route path="/Events" element={<Events/>}/> */}
          <Route path="Events" element={<Events/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
