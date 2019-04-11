import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/main_page.scss';
import search from "../../assets/images/mag.svg";
import graph from "../../assets/images/graph.svg";
import comments from "../../assets/images/conversation.svg";

class MainPage extends React.Component {

  render() {
    return (
      <div>
      <div className="main-page">
        {/* image from Lukas Blazek on unsplash.com */}
        <img className="splash-image"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
          alt="laptop with visualized data" />

        <div className="main-page-content-container">
          <div className="main-page-content">
            <div className="main-page-content-head">
              <h1>INFORMATION</h1>
              <h1>CHANGES</h1>
              <h1>EVERYTHING</h1>
            </div>
            <h2>So let’s change the way we take it in</h2>
            <p>2020 lets you listen to the latest Twitter conversations about the TOPIC or PERSON that matters most to you – and more importantly, it lets you listen to the hearts and emotions of these conversations in a visual, palatable experience</p>
            <Link to={'/signup'} className="main-page-button">Join the Conversation</Link>
          </div>       
        </div>
      </div>
      <div className="how-it-works">
          How it Works
        </div>
      <div className="main-page-info">
          <div className="main-page-info-content">
          <img src={search} alt="" className="splash-steps"></img>
            <p>Search the topics that matter to you OR search one of the pre-populated 2020 candidates to see what Twitter conversations are being had.</p>
            </div>
          <div className="main-page-info-content">
          <img src={graph} alt="" className="splash-steps"></img>
            <p>Using the latest AI sentiment and emotion text-analysis technologies, you’ll be able to quickly visualize Twitter users’ attitudes of your topic or person in easy-to-read, digestible displays.</p>
            </div>

          <div className="main-page-info-content">
            <img src={comments} alt="" className="splash-steps"></img>
            <p>Having questions about why a person is liked or disliked so much? Look at the scores and scroll through the tweets analyzed yourself! If you have more questions – join the conversation.</p>
            </div>
        </div>
        <div className="main-page-footer">
          <p> Check us out on Github - <a href="https://github.com/Ashotovich1990/2020" target="_blank"><i className="fab fa-github fa-lg" ></i></a></p>
        </div>
      </div>
    );
  }
}

export default MainPage;