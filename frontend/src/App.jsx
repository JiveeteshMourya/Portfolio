import './App.css'
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import CardPage from "./pages/CardPage";
import AboutPage from './pages/AboutPage';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:id" element={<CardPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;