import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
