import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


import Home from "./Pages/Home.js";

import NavBar from "./Components/NavBar";

function App() {
  return (
    
    <div>
      <Router>
        <NavBar />
        <Routes>
       <Route path="/" element = {<Home />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
