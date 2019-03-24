import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/browse');
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();

    let user = {
      username: this.props.demo.username,
      password: this.props.demo.password
    };

    this.props.login(user);

  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul className="login-form-errors">
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
      <div className="login-form-container">
        {/* image from Lukas Blazek on unsplash.com */}
        <img className="splash-image"
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
          alt="laptop with visualized data" />

        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <h2 className="login-form-heading">Log in to 2020</h2>
            <br />

            <label className="login-form-field">> <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username" />
            </label>
            <br />

            <label className="login-form-field">> <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password" />
            </label>
            <br />

            <div className="login-form-buttons">
              <input className="login-form-submit" type="submit" value="Submit" />
              <input className="demo-submit" onClick={this.handleDemo} type="submit" value="Demo"/>
            </div>

            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);