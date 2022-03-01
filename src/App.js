import './App.css';
import NavBar from './compnents/NavBar';
import TextForm from './compnents/TexTForm';
import About from './compnents/About';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar title="Text Analyzer" home="Home" about="About" />
      <Routes>
        <Route index="/" element={<TextForm />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
