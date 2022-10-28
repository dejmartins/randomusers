import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/Users";
import Page404 from "./components/404Page";
import Contact from "./components/Contact";
import Location from "./components/LiveLocation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="user/*" element={<User />}>
          <Route index element={<Navigate to="contact" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
