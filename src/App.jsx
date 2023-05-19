import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path="/" element={<HomeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
