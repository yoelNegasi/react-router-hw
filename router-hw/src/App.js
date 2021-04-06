import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <Router>
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/About">About</Link>
        </h1>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
