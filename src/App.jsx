import { BrowserRouter } from "react-router-dom"
import RouteComponent from "./components/routes/RouteComponent"
import Navbar from "./Navbar"

const App = () => {
  return (
    <div className=" phone:max-w-[100%] w-[1200px] mx-auto ">
      <BrowserRouter>
        <Navbar />
        <RouteComponent />
      </BrowserRouter>
    </div>
  )
}

export default App