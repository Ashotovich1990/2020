import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import ChartContainer from '../charts/chart';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CommentsContainer from './comments/comments_container';
import CommentComposeContainer from './comments/comment_compose_container';
import BrowseContainer from './browse/browse_container';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/browse" component={BrowseContainer} />
      <AuthRoute exact path="/charts" component={ChartContainer} />
      <ProtectedRoute exact path='/comments' component={CommentsContainer} />
      <ProtectedRoute exact path='/new_comment' component={CommentComposeContainer} />
    </Switch>
  </div>
);

export default App;