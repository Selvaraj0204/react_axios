import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="main">
      <h2>Crud operation</h2>
      <BrowserRouter>
          <Routes>
            <Route path='/create' element={<Create/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/update' element={<Update/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
