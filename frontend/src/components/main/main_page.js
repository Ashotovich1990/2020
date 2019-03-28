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
            <h1>Elections are coming up.</h1>
            <h1>See what people on Twitter think.</h1>
            <Link to={'/signup'} className="main-page-button">Start Looking</Link>
          </div>
          
        </div>
        
        

  
      </div>
      <div className="main-page-info">
          <div className="main-page-info-content">
            <i class="fab fa-asymmetrik fa-3x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis nisi vel nunc viverra hendrerit. Sed at tincidunt mi. Nullam at consequat diam. Cras efficitur magna ut condimentum viverra. Suspendisse posuere massa vel enim fringilla semper. Integer nec magna nec purus viverra dignissim. Proin cursus sed velit a consequat. Aenean malesuada ligula a pharetra vestibulum. Sed eget porttitor sapien, sit amet vehicula odio. Vivamus finibus ligula at quam accumsan, vel cursus urna aliquet. Morbi fermentum erat nec gravida maximus. Sed orci mauris, venenatis sit amet nunc eget, ullamcorper scelerisque arcu. Aenean condimentum urna nec sollicitudin volutpat. Integer in blandit leo. Aenean gravida aliquet hendrerit.</p>
            </div>
          <div className="main-page-info-content">
            <i class="fab fa-asymmetrik fa-3x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis nisi vel nunc viverra hendrerit. Sed at tincidunt mi. Nullam at consequat diam. Cras efficitur magna ut condimentum viverra. Suspendisse posuere massa vel enim fringilla semper. Integer nec magna nec purus viverra dignissim. Proin cursus sed velit a consequat. Aenean malesuada ligula a pharetra vestibulum. Sed eget porttitor sapien, sit amet vehicula odio. Vivamus finibus ligula at quam accumsan, vel cursus urna aliquet. Morbi fermentum erat nec gravida maximus. Sed orci mauris, venenatis sit amet nunc eget, ullamcorper scelerisque arcu. Aenean condimentum urna nec sollicitudin volutpat. Integer in blandit leo. Aenean gravida aliquet hendrerit.</p>
            </div>
          <div className="main-page-info-content">
            <i class="fab fa-asymmetrik fa-3x"></i>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis nisi vel nunc viverra hendrerit. Sed at tincidunt mi. Nullam at consequat diam. Cras efficitur magna ut condimentum viverra. Suspendisse posuere massa vel enim fringilla semper. Integer nec magna nec purus viverra dignissim. Proin cursus sed velit a consequat. Aenean malesuada ligula a pharetra vestibulum. Sed eget porttitor sapien, sit amet vehicula odio. Vivamus finibus ligula at quam accumsan, vel cursus urna aliquet. Morbi fermentum erat nec gravida maximus. Sed orci mauris, venenatis sit amet nunc eget, ullamcorper scelerisque arcu. Aenean condimentum urna nec sollicitudin volutpat. Integer in blandit leo. Aenean gravida aliquet hendrerit.</p>
            </div>
        </div>
        <div className="main-page-about"> 
          <img src="https://cdn.pixabay.com/photo/2019/03/25/09/57/bad-look-4079817_1280.jpg"></img>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis nisi vel nunc viverra hendrerit. Sed at tincidunt mi. Nullam at consequat diam. Cras efficitur magna ut condimentum viverra. Suspendisse posuere massa vel enim fringilla semper. Integer nec magna nec purus viverra dignissim. Proin cursus sed velit a consequat. Aenean malesuada ligula a pharetra vestibulum. Sed eget porttitor sapien, sit amet vehicula odio. Vivamus finibus ligula at quam accumsan, vel cursus urna aliquet. Morbi fermentum erat nec gravida maximus. Sed orci mauris, venenatis sit amet nunc eget, ullamcorper scelerisque arcu. Aenean condimentum urna nec sollicitudin volutpat. Integer in blandit leo. Aenean gravida aliquet hendrerit.</span>
</div>
        <div className="main-page-footer">
          <p>Copyright &copy; 2019</p>
        </div>
      </div>
    );
  }
}

export default MainPage;