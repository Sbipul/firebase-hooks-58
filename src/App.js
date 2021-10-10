import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Regi from './components/Regi/Regi';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
            <Header></Header>
            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <PrivetRoute exact path="/shipping">
                <Shipping></Shipping>
              </PrivetRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                <Regi></Regi>
              </Route>

            </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
