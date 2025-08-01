
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Testimonials } from "./components/Testimonials";
import { Courses } from "./Pages/Courses";
import { Login } from "./Pages/Login";
import { About } from "./Pages/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
