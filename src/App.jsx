import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
