import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Schedule from "./pages/Schedule/Schedule";
import Team from "./pages/Team/Team";

import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contactg/Contact";
import { Navbar } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import Page from "./pages/page/Page";
function App() {
  return (
    <Router>
       {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pages" element={<Page />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
