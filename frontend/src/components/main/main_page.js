import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/main_page.scss';

class MainPage extends React.Component {

  render() {
    return (
      <div>
      <div className="main-page">
        {/* image from Lukas Blazek on unsplash.com */}
        <img className="splash-image"
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
          alt="laptop with visualized data" />

        <div className="main-page-content-container">
          <div className="main-page-content">
            <div className="main-page-content-head">
              <h1>INFORMATION</h1>
              <h1>CHANGES</h1>
              <h1>EVERYTHING</h1>
            </div>
            <h2>So let’s change the way we take it all in.</h2>
            <p>2020 lets you listen to the latest Twitter conversations about the TOPIC or PERSON that matters most to you – and more importantly, it lets you listen to the hearts and emotions of these conversations in a visual, palatable experience.</p>
            <Link to={'/signup'} className="main-page-button">Join the Conversation</Link>
          </div>       
        </div>
      </div>
      <div className="main-page-info">
          <div className="main-page-info-content">
            <i className="fab fa-asymmetrik fa-3x"></i>
            <p><strong>SIGN UP</strong> and have access to the Twitterverse at your fingertips. Search the topics that matter to you OR search one of the pre-populated 2020 candidates with a simple click of a button to see what conversations are being had about them.</p>
            </div>
          <div className="main-page-info-content">
            <i class="fab fa-asymmetrik fa-3x"></i>
            <p><strong>ONCE YOU’VE MADE YOUR DECISION,</strong> get the latest tweets of your search topic. Using the latest AI sentiment and emotion text-analysis technologies, you’ll be able to quickly visualize Twitter users’ attitudes of your topic or person in easy-
to-read, digestible displays.</p>
            </div>
          <div className="main-page-info-content">
            <i class="fab fa-asymmetrik fa-3x"></i>
            <p><strong>JOIN THE CONVERSATION.</strong> Having questions about why a person is liked or disliked so much? Look at the 
scores and scroll through the tweets analyzed yourself! If you have more questions
– or simply to express your ideas – join the conversation and chat with your peers on how we can move forward.</p>
            </div>
        </div>
        <div className="main-page-about"> 
          <img src="https://cdn.pixabay.com/photo/2019/03/25/09/57/bad-look-4079817_1280.jpg"></img>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis nisi vel nunc viverra hendrerit. Sed at tincidunt mi. Nullam at consequat diam. Cras efficitur magna ut condimentum viverra. Suspendisse posuere massa vel enim fringilla semper.</span>
</div>
        <div className="main-page-footer">
          <p>Copyright &copy; 2019</p>
        </div>
      </div>
    );
  }
}

export default MainPage;