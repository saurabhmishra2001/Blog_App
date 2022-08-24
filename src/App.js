import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';




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
          <Route exact path='/Home'  element={<Home />} /> 
          <Route exact path='/Posts' element={<Posts />} /> 
      

         
         
        </Routes>
      </Router>


     
    </div>
  );
}

export default App;
