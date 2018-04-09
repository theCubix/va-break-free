import React, { Component } from 'react';

import LandingPage from '../components/LandingPage'

import './sass/index.scss'

class IndexPage extends Component {
  render() {
    const imageLq = this.props.data.landingPageBackgroundImageLowQuality.childImageSharp.resolutions;
    const imageHq = this.props.data.landingPageBackgroundImageHighQuality.childImageSharp.resolutions;

    return (
      <div>
        <LandingPage
          imageLq={imageLq}
          imageHq={imageHq}
          />
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
    landingPageBackgroundImageHighQuality: file(relativePath: {eq: "cover/break-free-hq.jpg"}) {
      childImageSharp {
        resolutions(width: 1000, height: 1000, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
  `;