import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/auth_form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      let user = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.login(user);
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login(this.props.demo);
  }

  renderErrors() {
    return (
      <ul className="signup-form-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        {/* image from Lukas Blazek on unsplash.com */}
        <img className="splash-image"
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
          alt="laptop with visualized data" />
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <h2 className="signup-form-heading">Sign up to 2020</h2>
            <br />
            <label className="signup-form-field">> <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username" />
            </label>
            <br />
            <label className="signup-form-field">> <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password" />
            </label>
            <br />
            <label className="signup-form-field">> <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password" />
            </label>
            <br />
            <div className="login-form-buttons">
              <input className="signup-form-submit" type="submit" value="Submit" />
              <input onClick={this.handleClick} className="demo-submit" type="submit" value="Demo" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);