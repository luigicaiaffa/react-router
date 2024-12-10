import { BrowserRouter, Routes, Route } from "react-router-dom";

// # Layout
import DefaultLayout from "./layout/DefaultLayout";

// # Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/posts" Component={Posts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
