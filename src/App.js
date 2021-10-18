import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import AuthProvider from './Context/AuthProvider';
import Shiping from './components/Shiping/Shiping';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <PrivetRouter exact path ='/shiping'>
        <Shiping></Shiping>
      </PrivetRouter>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <PrivetRouter exact path="/order">
        <PlaceOrder></PlaceOrder>
      </PrivetRouter>
      <Route exact path="/regester">
        <Regester></Regester>
      </Route>
      </Switch>
      {/* <Footer></Footer> */}
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
