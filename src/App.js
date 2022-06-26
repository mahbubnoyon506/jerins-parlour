import './App.css';
import {Routes, Route,} from "react-router-dom";
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import Students from './Pages/Students/Students';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='students' element={<Students></Students>}></Route>
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
