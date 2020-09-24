import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SideNav from "./components/SideNav";
import recreateMuiTheme from "./theme/recreateMuiTheme";
import { colorValues, modes } from "./utils";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(modes.DARK);
  const [pcolor, setPcolor] = useState(colorValues.BLACK);

  const customizedTheme = recreateMuiTheme(mode, pcolor);

  return (
    <ThemeProvider theme={customizedTheme}>
      <div className="App">
        <SideNav />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/home" component={HomePage}></Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
