import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formData: {
            username: '',
            password: '',
          },
          errors: {
            username: '',
            password: '',
          }
        };
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
          errors: {
            ...prevState.errors,
            [name]: value ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
          }
        }));
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.formData.username || !this.state.formData.password) {
          alert('Please fill in all fields');
          return;
        }
        // Here you would typically call an API or handle login logic
        console.log('Login attempt with:', this.state.formData);
      }
    
      render() {
        return (
          <div className="sign-in-container">
            <form onSubmit={this.handleSubmit}>
              <p>Sign in to start your session</p>
    
              <div className="form-group">
                <div className="input-with-icon">
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="UserName" 
                    value={this.state.formData.username} 
                    onChange={this.handleChange} 
                    className={`form-control ${this.state.errors.username && 'error'}`}
                  />
                  <i className="fas fa-envelope"></i>
                </div>
                {this.state.errors.username && <div className="error">{this.state.errors.username}</div>}
              </div>
    
              <div className="form-group">
                <div className="input-with-icon">
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.formData.password} 
                    onChange={this.handleChange} 
                    className={`form-control ${this.state.errors.password && 'error'}`}
                  />
                  <i className="fas fa-lock"></i>
                </div>
                {this.state.errors.password && <div className="error">{this.state.errors.password}</div>}
              </div>
    
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href="/forget-password" className="forgot-password">I forgot my password</a>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Login;
