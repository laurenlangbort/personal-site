import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about"; 
import Project from "./components/project"; 
import Interest from "./components/interests" 
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <About /> 
      <Project /> 
      <Interest /> 
      <Contact />
    </div>
  );
}

export default App;
