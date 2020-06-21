import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Images from "./pages/Images";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Images />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
