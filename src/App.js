import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import {logoutAction} from './actions/usersActions';
import { changeSiteName } from './actions/sitesActions';
 
import Home from './containers/Home';
import User from './containers/User';
import Users from './containers/Users';
import Login from './containers/Login';
import PrivatRoute from './containers/PrivateRoute';

class App extends Component {
  render() {
    let  loginLink = <li className="nav-item active"> <NavLink className="nav-link" to="/login">Login</NavLink></li>
   if (this.props.isLogged === true){
    loginLink =  <li className="nav-item active"> <NavLink className="nav-link" to="/login" onClick={this.handlerLogout}>Logout</NavLink></li>
   }
    return (

      <Router>

        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <Link to="/">{this.props.siteName}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item active"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
              <li className="nav-item active"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item active"><NavLink className="nav-link" to="/user">User</NavLink></li>
               {loginLink}
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>

          <PrivatRoute path="/users/:pageNumber?" component={Users}></PrivatRoute>
          <PrivatRoute path="/user/:userID" component={User}></PrivatRoute>
        </div>
      </Router>


    );

  }
  handlerLogout = () => {
    this.props.logout();
  }

}

const mapStateToProps = (state) => {
  return {
    siteName: state.sitesReducer.siteName,
    isLogged :state.usersReducer.isLogged,

  }
};

const mapDispatchToProps = (disaptch) => {
  return {
    changeSiteName(newSiteName) {
      (changeSiteName(newSiteName))
    },
    logout() {
      disaptch(logoutAction());
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
