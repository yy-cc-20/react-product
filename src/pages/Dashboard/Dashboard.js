import React, { Component, Fragment } from 'react';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: true
    };
  }

  closePopUp = () => {
    this.setState({ showPopUp: false });
  }
  
  render() {
    let popUp = null;

    if (this.state.showPopUp)
      popUp = (
        <div className="popup" id="warningPopup">
          <span className="close" onClick={this.closePopUp}>&times;</span>
          <h2>WARNING</h2>
        </div>
      );

    return (
      <Fragment>
        <iframe src="https://www.google.com/" title="Google website"></iframe>
        {popUp}
      </Fragment>
    );
  }; 
}

export default Dashboard;
