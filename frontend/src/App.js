import "./App.css";
//Components
import Signin from "./Components/Signin/Signin"
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Home/Home"
import HiddenRoute from "./Components/HiddenRoute"
import LandingPage from "./Components/Landing Page/LandingPage"
import Navbar from "./Components/Nav"
import Home from "../src/pages/index"

//State
import { AuthProvider } from "./Context/AuthContext";

//Router
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


//Bootstrap imports
import { Container } from "react-bootstrap";

function App() {
  return (
    
       
          <Router>
            <AuthProvider>
              <Navbar />
              
            <Switch>
              <Route exact path="/" component={LandingPage} exact/>
              <Route path="/signup" component={Signup} exact />
              <Route path="/signin" component={Signin} exact />
              <HiddenRoute path="/home" component={Dashboard} />

            </Switch>
            
            </AuthProvider>
          </Router>
          
    
      
    
  );
}

export default App;
