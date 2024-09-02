import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import Navbars from './components/navbars/Navbars';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Addblog from './components/addblog/Addblog';
import Viewblog from './components/viewblog/Viewblog';
import Plantsview from './components/plantsview/Plantsview';
import Plantsadd from './components/plantsadd/Plantsadd';
import Profile from './components/profile/Profile';
import Editprofile from './components/editprofile/Editprofile';
import Viewsingleblog from './components/viewsingleblog/Viewsingleblog';
import Editplants from './components/editplants/Editplants';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbars/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/viewblog' element={<Viewblog/>}/>
        <Route path='/plantsview' element={<Plantsview/>}/>
        <Route path='/plantsadd' element={<Plantsadd/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editprofile/:id' element={<Editprofile/>}/>
        <Route path='/singleview/:id' element={<Viewsingleblog/>}/>
        <Route path='/editplants/:id' element={<Editplants/>}/>

      </Routes>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
