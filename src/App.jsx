import { BrowserRouter, Routes, Route } from "react-router-dom";

// # Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={About} />
        <Route path="/posts" Component={Posts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
