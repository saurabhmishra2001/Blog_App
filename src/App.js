import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';




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
        <Post/>
        <Routes>
          <Route exact path='/Home'  element={<Home />} /> 
          <Route exact path='/Post' element={<Post />} /> 
      

         
         
        </Routes>
      </Router>


     
    </div>
  );
}

export default App;
