import Header from "./header/Header";
import About from "./About/About.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
