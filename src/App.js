import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SideNav from "./components/SideNav";
import recreateMuiTheme from "./theme/recreateMuiTheme";
import { colorValues, modes } from "./utils";
import { ThemeProvider } from "@material-ui/core";
import Category from "./components/Category";

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(modes.DARK);
  const [pcolor, setPcolor] = useState(colorValues.BLACK);

  const customizedTheme = recreateMuiTheme(mode, pcolor);

  return (
    <ThemeProvider theme={customizedTheme}>
      <div className="App">
        <Router>
          <SideNav></SideNav>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
            {/* <Route exact path="/search" component={Search}></Route> */}
            <Route exact path="/categories" component={Category}></Route>
            <Route exact path="/categories/:id" component={Category}></Route>
            {/* <Route exact path="/glass" component={Glass}></Route>
            <Route exact path="/ingredients" component={Ingredients}></Route>
            <Route exact path="/alcoholic" component={Alcoholic}></Route>
            <Route exact path="/favourites" component={Favourites}></Route>
            <Route exact path="/about" component={About}></Route> */}
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
