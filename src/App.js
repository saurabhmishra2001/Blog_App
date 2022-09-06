import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Computer from './components/Computer';
import DataStructure from './components/DataStructure';
import Algorithm from './components/Algorithm';
import Javascript from './components/Javascript';




import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
   
       
        <Routes>
          <Route exact path='/Home' element={<Home/>}/>  
          <Route exact path='/Posts' element={<Posts/>} /> 
          <Route exact path='Computer'element={<Computer/>} /> 
          <Route exact path='DataStructure'element={<DataStructure/>} /> 
          <Route exact path='Algorithm'element={<Algorithm/>} />
          <Route exact path='Javascript'element={<Javascript/>} />
      

         
         
        </Routes>
      </Router>


     
    </div>
  );
}

export default App;
