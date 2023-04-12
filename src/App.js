


// import Home from './components/Home/Home';
//import Register from './components/register/Register';

import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login1 from './component/Auth/Login1';
import Register1 from './component/Auth/Register1';
import PasswordReset from './component/Auth/PasswordReset';
import ForgotPassword from './component/Auth/ForgotPassword';
// import Dashboard from "./components/Auth/Dashboard";
import Home from './component/Home';
import Addtocart from './component/Addtocart';
import Productdetail from "./component/Productdetail";
import Shoppage from "./component/Shoppage";
import Wishlist from "./component/Wishlist";
import Blog from "./component/Blog";
import Footer1 from "./component/Footer";
import Checkout from "./component/Checkout";
function App() {
  return (
      <div className='App font-sans text-lg'>
            <BrowserRouter>
            {/* <Routes>
               <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register1 />} />
              <Route path="/home" element={<Home />} />
              <Route path="/addtocart" element={<Addtocart />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              
            </Routes> */}
          <Productdetail/>
            <Shoppage/>  
            <Wishlist/>
<Footer1/>
            <Blog/>
            <Checkout/>
            </BrowserRouter>
 
      </div>
   
  );
}

export default App;
