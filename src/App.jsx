import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contactg/Contact";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Schedule from "./pages/Schedule/Schedule";
import Team from "./pages/Team/Team";
import Page from "./pages/page/page";
import SinglePost from "./pages/singlePost/singlePost";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pages" element={<Page />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/singlepost" element={<SinglePost />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
