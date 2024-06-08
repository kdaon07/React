import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";
import Detail from "./components/Detail.jsx";
import AxiosTest from "./AxiosTest.jsx";
import HomeAxios from "./components/HomeAxios.jsx";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />}/>
        <Route path="/card/:id" element={<Detail />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
    // <AxiosTest />
  );

}