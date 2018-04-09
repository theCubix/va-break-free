import React from 'react';

import './index.scss'

class LandingPage extends React.Component {
  render() {
    const image = this.props.image

    return (
      <section className="landingpage-section">
        <div className="landingpage-cover"></div>
        <div
          style={{ backgroundImage: `url(${image.src})` }}
          className="landingpage-background"
        ></div>
      </section>
    )
  }
};

export default LandingPage;