import "./App.css";
//import Single from "./components/Single";
//import Home from './components/Home';
import Topbar from "./components/Topbar";
import "font-awesome/css/font-awesome.min.css";
import Write from "./components/Write/Write";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nopage from "./components/NoPage/Nopage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          
       <Route path="register" element={<Register />}></Route>
          <Route path="write" element={<Write />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
