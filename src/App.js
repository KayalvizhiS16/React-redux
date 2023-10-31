import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Add_Interns from './Router/Add_Interns';
import Status from './Router/Status';
import Dashboard  from './Router/Dashboard';
import Layout from './Router/Layout';






/*import MapFunc from './components/MapFunc.js'
import ForEach  from './components/ForEach'
import FilterFunc from './components/FilterFunc.js';
import FindIndexfunc from './components/FindIndexfunc.js';
import  FindFunc from './components/FindFunc.js';
import EveryFunc from './components/EveryFunc.js';
import PushFunc from './components/PushFunc.js';
import  PopFunc  from './components/PopFunc.js';
import Func_2 from './components/Func_2.js';
*/

const App = () => {
  return (
    
    <BrowserRouter>
    <Layout/>
   
    <Routes>
    
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add Interns"element={<Add_Interns/>}></Route>
        <Route path="/status"element={<Status/>}></Route>
            </Routes></BrowserRouter>
  
  )
}

export default App;