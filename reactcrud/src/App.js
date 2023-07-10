
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cruddata from "./Cruddata";
import Empedit from "./Empedit";
import Empcreate from "./Empcreate"
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cruddata/>}/>
        <Route path="/empdata/:empid" element={<Empedit/>}/>
        <Route path="/empcreate" element={<Empcreate/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
