import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Blue from "./Pages/Blue";
import Green from "./Pages/Green";
import Red from "./Pages/Red";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blue" component={Blue} />
        <Route path="/green" component={Green} />
        <Route path="/red" component={Red} />
      </Switch>
    </div>
  );
}

export default App;
