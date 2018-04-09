import React from 'react';

import './index.scss'

class LandingPage extends React.Component {
  render() {
    const image = this.props.image

    return (
      <section className="landingpage-section">
        <div className="landingpage-cover container">
          <h1 className="title">Cover</h1>
        </div>
        <div
          style={{ backgroundImage: `url(${image.src})` }}
          className="landingpage-background"
        ></div>
      </section>
    )
  }
};

export default LandingPage;