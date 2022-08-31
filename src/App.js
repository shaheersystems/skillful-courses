import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AppBar from "./components/AppBar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import Test from "./Pages/Test";
function App() {
  return (
    <div className="App">
      <AppBar />
      <MobileNav />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
