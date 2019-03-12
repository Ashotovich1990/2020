import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  /* What links should we have? */
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-links">
          {/* <Link to={'/tweets'}>All Tweets</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/new_tweet'}>Write a Tweet</Link> */}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="navbar-links">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <h1 className="navbar-title"><Link to={'/'}>2020</Link></h1>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;