import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouterTest from "./pages/RouterTest";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouterTest />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

export default App
