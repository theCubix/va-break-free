import React, { Component } from 'react';

import LandingPage from '../components/LandingPage'

class IndexPage extends Component {
  render() {
    const image = this.props.data.landingPageBackgroundImageLowQuality.childImageSharp.resolutions

    return (
      <div>
        <LandingPage image={image} />
      </div>
    )
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query Default {
    landingPageBackgroundImageLowQuality: file(relativePath: {eq: "cover/break-free-hq.jpg"}) {
      childImageSharp {
        resolutions(width: 40, height: 40, quality: 10) {
          src
        }
      }
    }
  }
  `;