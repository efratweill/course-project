import React, { useState } from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Productpage from "./pages/Productpage/Productpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeContext, themes } from "./contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Admin">Admin</Link>
                </li>
              </ul>

              <button
                onClick={() => {
                  setTheme(theme === themes.light ? themes.dark : themes.light);
                }}
              >
                Change theme
              </button>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/Admin">
                <Admin />
              </Route>
              <Route
                path="/Products/:ProductId"
                component={Productpage}
              ></Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
