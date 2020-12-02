import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
