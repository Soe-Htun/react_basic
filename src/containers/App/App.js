import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Auth from '../View/Auth/Login/Login';
import SignUp from '../View/Auth/Signup/Singup';
import Layout from '../View/Layout/Layout';
import Redux from '../Components/Redux/Redux';
import Context from '../Components/Context/Context';
import Params from '../Components/Params/Params';
import ParamsDetails from '../Components/Params/ParamDetails';
import GetData from '../Components/GetData/GetData';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='auth' element={ <Auth /> } />
          <Route path='/' element={ <Navigate to='auth' /> }/>
          <Route path='signUp' element={ <SignUp /> } />
          <Route path='home' element={ < Layout /> } >
            <Route path='context' element={ <Context /> } />
            <Route path='redux' element={ <Redux /> } />
            <Route path='params' element={ <Params /> } >
              <Route path=':name/details' element={<ParamsDetails/>} />
            </Route>
            <Route path='getData' element={ <GetData/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
