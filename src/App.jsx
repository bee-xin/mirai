import NavBar from "./components/NavBar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";
const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </MovieProvider>
  );
};
export default App;
