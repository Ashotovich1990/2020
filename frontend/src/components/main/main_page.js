import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/main_page.scss';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        {/* image from Lukas Blazek on unsplash.com */}
        <img className="splash-image"
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
          alt="laptop with visualized data" />

        <div className="main-page-content-container">
          <div className="main-page-content">
            <h1>Elections are coming up.</h1>
            <h1>See what people on Twitter think.</h1>
            <Link to={'/signup'} className="main-page-button">Start Looking</Link>
          </div>
        </div>

        {/* <footer className="main-page-footer">
          <p>Copyright &copy; 2019</p>
        </footer> */}
      </div>
    );
  }
}

export default MainPage;