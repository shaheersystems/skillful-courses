import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AppBar from "./components/AppBar";
import MobileNav from "./components/MobileNav";
function App() {
  return (
    <div className="App">
      <AppBar />
      <MobileNav />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
