import "./App.css";
import Home from "./Pages/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Booking from "./Pages/Booking";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import MyOrders from "./Pages/MyOrders";
import ManageOrders from "./Pages/ManageOrders";
import AddPackage from "./Pages/AddPackage";
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/myorders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path="/addPackage">
            <AddPackage />
          </PrivateRoute>
          <PrivateRoute path="/booking/:packageId">
            <Booking />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
