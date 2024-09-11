import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about"; 
import Project from "./components/project"; 
import Interest from "./components/interests"

function App() {
  return (
    <div>
      <Navbar />
      <About /> 
      <Project /> 
      <Interest />
    </div>
  );
}

export default App;
