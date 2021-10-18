import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './Components/About/About';
import Home from './Home';
import Contact from './Components/Contact/Contact';
import Help from './Components/Help/Help';
import CompanyRegister from './Components/CompanyRegister/CompanyRegister';
import UserRegister from './Components/UserRegister/UserRegister';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
              <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/help" component={Help} />
                    <Route path="/companyregister" component={CompanyRegister} />
                    <Route path="/userregister" component={UserRegister} />
                    <Route path="/login" component={Login} />
                </Switch>
              </Router>
    </div>
  );
}

export default App;
