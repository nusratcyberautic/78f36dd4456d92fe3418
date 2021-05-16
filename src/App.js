import "./App.css";
import { Route } from "react-router-dom";
import Asteroid from "./Asteroid";
import AsteroidInfo from "./AsteroidInfo";
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Asteroid />
      </Route>
      <Route path="/asteroid_info/:id">
        <AsteroidInfo />
      </Route>
    </div>
  );
}

export default App;
