import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Register from "./Components/Register" 
import Home from "./Components/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  )
}

export default App
