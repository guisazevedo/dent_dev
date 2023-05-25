import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from "./03_pages/Landing_page";
import Login_page from "./03_pages/Login_page";
import Signup_page from "./03_pages/Signup_page";
import WebApp_page from "./03_pages/WebApp_page";

function App() {
  return (
    <div className="bg-light">
      <Router>
        <Routes>
          <Route path="/" Component={Landing_page}></Route>
          <Route path="/log-in" Component={Login_page}></Route>
          <Route path="/sign-up" Component={Signup_page}></Route>
          <Route path="/web-app" Component={WebApp_page}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
