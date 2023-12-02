import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import BDI from './pages/BDI'
import ContactUs from './pages/Contact';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
import Graph from './pages/Graph'
import Graph2 from './pages/Graph2'
import Treatments from './pages/Treatment';
import Treatment1 from './pages/Treatments/1b';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/graph2' element={<Graph2 />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path = "/bdi" element={<BDI/>} /> 
          <Route path='/graph' element={<Graph2 />} />
          <Route path = "/contact" element={<ContactUs/>} /> 
          <Route path = "/treatments" element={<Treatments/>} /> 
          <Route path = "/treatment1" element={<Treatment1/>} /> 
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
