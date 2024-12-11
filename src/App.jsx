import { BrowserRouter, Routes, Route } from "react-router-dom";

// # Layout
import DefaultLayout from "./layout/DefaultLayout";

// # Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts";
import ShowPost from "./pages/ShowPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/posts" Component={Posts} />
          <Route path="/posts/:id" Component={ShowPost} />
          <Route path="/not-found" Component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
