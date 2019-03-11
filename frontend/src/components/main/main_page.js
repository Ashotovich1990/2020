import React from 'react';
import '../../stylesheets/navbar.scss';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page">
        <h1 className="main-page-hook">See what people on Twitter think.</h1>
        <footer>
          Copyright &copy; 2019 {/* Chirper */}
        </footer>
      </div>
    );
  }
}

export default MainPage;