
import './App.css';
import Navbar from './component/Navbar';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Addtocard from "./component/Addtocard";
import Login1 from "./component/Login1";

function App() {
  return (

        <Router>
          <div className='App'>
       <Navbar/>
       
       <Routes>

            <Route exact path="/" element={Navbar} />  
            <Route path="/Addtocard" element={<Addtocard/>} />
            <Route path="/Login1" element={<Login1/>} />
            
       </Routes>

       </div>
       </Router>
      
       
  );
}

export default App;
