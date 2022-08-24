import Navbar from './components/Navbar';
import Home from './components/Home';
// import Login from './components/login';



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
          <Route path="/" component={Home} />
          {/* <Route path="/" component={Home} />
          <Route path="/login" component={Login} /> */}
        </Routes>
      </Router>


     
    </div>
  );
}

export default App;
