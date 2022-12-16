
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";


function App() {
  return (
    <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center">
        <Router>
       <Navbar/>
       
         <Switch>
               
         </Switch>
         
       </Router>
       </section>
       
  );
}

export default App;
