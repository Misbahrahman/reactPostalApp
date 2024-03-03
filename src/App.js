import logo from './logo.svg';
import './App.scss';
import {Entry} from "./entry.js";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { Info } from "./info.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
