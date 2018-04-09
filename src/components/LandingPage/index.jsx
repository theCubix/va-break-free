import React from 'react';

class LandingPage extends React.Component {
  render() {
    const image = this.props.image

    return (
      <div>Works {image.src}</div>
    )
  }
};

export default LandingPage;