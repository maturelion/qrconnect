import React from "react";
import { Route, Switch } from "react-router-dom";
import Wallet from "./component/Wallets/Wallets";
import Home from "./component/Home/Home";
import Success from "./component/Success/Success";
import FourZeroFour from "./component/FourZeroFour";

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wallets" component={Wallet} />
      <Route exact path="/success" component={Success} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};

export default BaseRouter;
