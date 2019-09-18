import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SearchBusinessesInput from './components/businesses/searchBusinessesInput';
import featuredEventInput from './components/featuredEvent/featuredEventInput'
import Signup from './components/users/Signup'
import Login from './components/users/Login'

const store = createStore(rootReducer, applyMiddleware(thunk))

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
    position: 'relative'
  }


  const Navbar = () =>
  <div id="navbar">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      
      /* add prop for activeStyle */
      activeStyle={{
        background: 'red'
      }}
    >Home</NavLink>
    <NavLink
      to="/search_featured_event"
      exact
      style={link}
      activeStyle={{
        background: 'red'
      }}
    >Featured Events</NavLink>
    <NavLink
      to="/search_businesses"
      exact
      style={link}
      activeStyle={{
        background: 'red'
      }}
    >Search Foods</NavLink>
  </div>;

  const Home = () => {
    return(
    <div>
      <h1> Welcome to My Clone of Yelp!</h1> 
      <p> Hurry up and Search something! I am getting hungry!</p>
    </div>
    )
  }

ReactDOM.render(
  
    <Provider store={store}>
      <App />
      <Router>
          <Navbar />
          <div>   
            <Route exact path="/" component={Home}/>
            <Route exact path="/search_featured_event" component={featuredEventInput}/>
            <Route exact path="/search_businesses" component={SearchBusinessesInput}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
          </div>     
      </Router>
    </Provider>,
    document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
