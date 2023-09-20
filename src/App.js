import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';


function App() {
  return (
    <div className='App'>
    
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
      <Route exact path='/update' element={<Update/>}></Route>
      
      


      </Routes>
      </BrowserRouter>
      </div>
      
     
      
     
  );
}

export default App;
