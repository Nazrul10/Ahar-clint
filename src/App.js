import React from "react";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthContext from './Components/AuthContext/AuthContext';
import Home from './Components/Home/Home';
import MyOrders from './Components/MyOrders/MyOrders';
import Login from './Components/Login/Login';
import OrderPlace from "./Components/OrderPlace/OrderPlace";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import AddFood from "./Components/AddFood/AddFood";
import ManageAllOrder from "./Components/ManageAllOrder/ManageAllOrder";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <AuthContext>
      <Router>
      <Switch>
        <Route exact path="/">
       <Home></Home>
        </Route>
        <Route path="/home">
       <Home></Home>
        </Route>
        <PrivateRouter path="/orders">
       <MyOrders></MyOrders>
        </PrivateRouter>
        <Route path="/manage">
       <ManageAllOrder></ManageAllOrder>
        </Route>
        <Route path="/foods">
       <AddFood></AddFood>
        </Route>
        <PrivateRouter path="/orderplace/:orderId">
       <OrderPlace></OrderPlace>
        </PrivateRouter>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="*">
        <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </AuthContext>
    // <div>
    //   <Home></Home>
    //this is a comment
    // </div>
  );
}

export default App;
