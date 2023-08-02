import './App.css'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"

//Componentes
import Home from './Views/Home/Home';
import NavBar from './components/NavBar/NavBar.jsx';
import ActivityForm from './components/ActivityForm/ActivityForm';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail';
import Landing from "./Views/Landing/Landing";

function App() {
  const {pathname} = useLocation();
  return (
    <div>
      {pathname !== "/" && <NavBar/>}

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
        <Route path='/ActivityForm' element={<ActivityForm/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  )
}
export default App;