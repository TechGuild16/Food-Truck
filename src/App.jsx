import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Schedule from "./pages/Schedule/Schedule";
import Team from "./pages/Team/Team";
import Page from "./pages/page/page";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contactg/Contact";
import Footer from "./components/Footer/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import  Navbar from "./components/Navbar/NavigationBar.jsx";
import NavigationBar from "./components/Navbar/NavigationBar";
import NavigationBar1 from "./components/Navbar/NavigationBar.jsx";


function App() {
  return ( 

       <Router> 
         <NavigationBar1></NavigationBar1>
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/About" element={<About />} />
           <Route path="/Schedule" element={<Schedule />} />
           <Route path="/Team" element={<Team />} />
           <Route path="/Pages" element={<Page />} />
           <Route path="/Blog" element={<Blog />} />
           <Route path="/Contact" element={<Contact/>} />
           </Routes>
       <Footer />
     </Router>

    
    

    
  );
}

export default App;
