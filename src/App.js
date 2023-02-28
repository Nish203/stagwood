
// import './App.css';
// import Home from './component/Home';
// import Navbar from "./component/Navbar";

// import { BrowserRouter, Routes, Route , Switch} from "react-router-dom";

// import Shoppage from './component/Shoppage';
// import Addtocart from "./component/Addtocart";
// import Productdetail from "./component/Productdetail"

// import Register1 from "./component/Register1";
// import Login1 from "./component/Login1";
// import Resetpw from "./component/Resetpw";



// function App() {
//   return (
//     <BrowserRouter>
//     <div className='App font-sans text-lg '>
    
//     <Shoppage/>
    
//     {/* <Productdetail/> */}
//     {/* <Register1/>
//     <Login1/>
//     <Resetpw/> */}
//     <Routes>
// {/*   
//        <Route path="/" element={<Home />}>
//         <Route index element={<Navbar />} />
//         <Route path="/Addtocart" element={<Addtocart />} />
//         <Route path="/Login1" element={<Login1 />} />
//       </Route>  */}
 
//     </Routes>
//     </div>
//   </BrowserRouter>
//       //   <Router>
//       //     <div className='App font-sans text-lg '>
//       //  <Home/>
//       //  {/* <Shoppage/> */}
//       //  {/* <Register1/> */}
//       //  <Routes>
//       //  <Switch>
//       //        <Route exact path="/" element={Home} />  
//       //       <Route path="/Addtocart" element={<Addtocart/>} />
//       //        {/* <Route path="/Login1" element={<Login1/>} /> */}
//       //        </Switch>   
//       //  </Routes>
 
//       //  </div>
//       //  </Router>
      
       
//   );
// }

// export default App;


// import Home from './components/Home/Home';
//import Register from './components/register/Register';

import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login1 from './component/Auth/Login1';
import Register1 from './component/Auth/Register1';
import PasswordReset from './component/Auth/PasswordReset';
import ForgotPassword from './component/Auth/ForgotPassword';
// import Dashboard from "./components/Auth/Dashboard";
import Home from './component/Home';
function App() {
  return (
      <div className='App font-sans text-lg'>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login1 />} />
              <Route path="/register" element={<Register1 />} />
              <Route path="/home" element={<Home />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
            </Routes>
            </BrowserRouter>
      </div>
   
  );
}

export default App;
