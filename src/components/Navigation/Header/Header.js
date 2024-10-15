import React, { Component } from 'react';

import './Header.css';

class Header extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.formatDate(new Date()),
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: this.formatDate(new Date()),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    formatDate = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    render() {
        return (
            <nav className="header">
                <div style={{ marginBottom: '40px' }}>
                    <p>{this.props.isLogin ? `Hello ${this.props.username}` : ''}</p>
                </div>
    
                <div style={{ textAlign: 'right'}}>
                    <p>Time: {this.state.currentTime}</p>

                    <a href={this.props.isLogin ? '/Logout' : '/SignIn'} style={{textDecoration: 'none'}}>
                        <p style={{ textAlign: 'right' }}>{this.props.isLogin ? 'Logout' : 'Login'}</p>
                    </a>
                </div>
            </nav>
        );
    };
}

export default Header;
