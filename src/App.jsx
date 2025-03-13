import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/Navbar/NavigationBar";
import About from "./pages/About/About";
import Contact from "./pages/Contactg/Contact";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Schedule from "./pages/Schedule/Schedule";
import Team from "./pages/Team/Team";
import SinglePost from "./pages/singlePost/singlePost";
import Page from "./pages/page/FAQ";
import Error from "./pages/Error/Error";
import Blog from "./pages/Blog/Blog";
import FAQ from "./components/Page/FAQ/FAQ";
import ScheduleOrder from "./components/Schedule/ScheduleOrder";


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
        <Route path="/Error" element={<Error/>} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/404" element={<Error />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Schedule" element={<Schedule/>} />


        <Route path="/Menu" element={< Menu/>}/> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
