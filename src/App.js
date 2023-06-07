
import './App.css';
import Securityquestion from './Securityquestion';
import JcaApp from './JcaApp';
import Login from './login';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        <Route path="/Securityquestion" element={<Securityquestion />}></Route>
        <Route path="/jcaapp" element={<JcaApp />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
