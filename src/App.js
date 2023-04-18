import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
