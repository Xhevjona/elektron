import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import Residential from "./components/Residential/residential";
import Commercial from "./components/Commercial/commercial";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

 
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/residential-services" element={<Residential/>} />
          <Route exact="true" path="/commercial-services" element={<Commercial/>} />
          <Route exact="true" path="/projects" element={<Projects/>} />
          <Route exact="true" path="/about" element= {<About/>} />
          <Route exact="true" path="/contact-us" element={<Contact/>} />
        </Routes> 
      </Layout>
    </Router>
  );
}
export default App;
