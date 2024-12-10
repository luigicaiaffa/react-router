import { BrowserRouter, Routes, Route } from "react-router-dom";

// # Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
