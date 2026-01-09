import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Quiz } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
