import './App.css';
import {
  Routes, Route,} from "react-router-dom";
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Students from './Pages/Students';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='students' element={<Students></Students>}></Route>
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
