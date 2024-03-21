import { Routes , Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register"
import "./Styles/login.css"
import "./Styles/registration.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>

  );
}

export default App;