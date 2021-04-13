import "./App.css";
import Launchpads from "./Launchpads";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LaunchInfo from "./LaunchInfo";
function App() {
  return (
    <Router>
      <main>
        <header>
          <h1>spaceX</h1>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Launchpads />
            </Route>
            <Route path="/launches/:id">
              <LaunchInfo />
            </Route>
          </Switch>
        </div>
        <footer>
          <a href="https://www.linkedin.com/in/vardhman-jain-881b4b179/">
            This project is built by vardhman jain(vardhmanjain293@gmail.com)
          </a>
        </footer>
      </main>
    </Router>
  );
}

export default App;
