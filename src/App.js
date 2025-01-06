import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import UserList from './Users/Pages/UserList'
import MainNav from './Common/Components/Navigation/MainNav';

const App=()=>{

  const users = [{
    id: 'u1',
    name: 'Rajesh Kumar',
    image: 'https://i.pravatar.cc/300?img=1',
    places: 3
  },
  {
    id: 'u2',
    name: 'Anita Sharma',
    image: 'https://i.pravatar.cc/300?img=2',
    places: 3
  },
  {
    id: 'u3',
    name: 'Vikram Singh',
    image: 'https://i.pravatar.cc/300?img=3',
    places: 2
  },
  {
    id: 'u4',
    name: 'Priya Patel',
    image: 'https://i.pravatar.cc/300?img=4',
    places: 5
  },
  {
    id: 'u5',
    name: 'Amitabh Bachchan',
    image: 'https://i.pravatar.cc/300?img=5',
    places: 4
  }]
  return (
    <Router>
      <MainNav></MainNav>
    <Switch>
    <Route path='/' exact>
    <UserList items={users}></UserList>
    </Route>
    <Redirect to='/'></Redirect>
    </Switch>
    </Router>
  );
}

export default App;
