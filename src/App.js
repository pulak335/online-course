import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Component/Home/Home';
import Footer from './Footer/Footer';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Service from './Component/Service/Service';
import Notfound from './Component/Notfound/Notfound';
import Regi from './Registration/Regi';

function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/serivce'>
            <Service></Service>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/registration'>
            <Regi></Regi>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
