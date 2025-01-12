import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import UserList from "./Users/Pages/UserList";
import MainNav from "./Common/Components/Navigation/MainNav";
import About from "./Common/Pages/About";
import UserProfile from "./Users/Pages/UserProfile";
import NewPlace from "./Places/Pages/NewPlace";
import { DUMMY_PLACES, DUMMY_USERS } from "./Common/Util/DUMMY_DATA";

const App = () => {
  return (
    <Router>
      <MainNav></MainNav>
      <Switch>
        <Route path="/" exact>
          <UserList items={DUMMY_USERS}></UserList>
        </Route>
        <Route path="/:id/places" exact>
          <UserProfile users={DUMMY_USERS} places={DUMMY_PLACES}></UserProfile>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>
        <Route path="/about" exact>
          <About></About>
        </Route>
        {/* <Redirect to="/"></Redirect> */}
      </Switch>
    </Router>
  );
};

export default App;
