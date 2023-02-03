
import './App.css';
import React from 'react';
// import Navbar from './component/Navbar';

import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';

 //import Registeer from './component/Registeer';
import Register1 from '../src/component/Register1';
 //import Login1 from './component/Login1';
// import Resetpw from './component/Resetpw';
// import Login1 from './component/Login1';
// import Resetpw from './component/Resetpw';


//import Addtocard from "./component/Addtocard";
//import Productdetail from './component/Productdetail';

 

function App() {
  return (

        <Router>
          <div className='App'>
       {/* <Navbar/> */}
       {/* <Resetpw/> */}
       {/* <Login1/>  */}
         {/* <Registeer/>  */}
          <Register1/> 
       <Routes>
           
            {/* <Route exact path="/" element={Navbar} /> 
            <Route path="/Addtocard" element={<Addtocard/>} /> */}
             {/* <Route exact path="/" element={<Login1/>}/> */}
            {/* <Route exact path="/register" element={<Register1/>}/>
            <Route exact path="/resetpw" element={<Resetpw/>} /> */}
       </Routes>

       

      


       </div>
       </Router>
       
      
       
  );
}

export default App;
