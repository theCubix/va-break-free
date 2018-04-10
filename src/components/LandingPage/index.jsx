import React from 'react';
import Img from 'gatsby-image';
import ButtonLink from '../ButtonLink'

import './index.scss';

import iconArrowDown from '../../assets/icons/icon_arrow_down.svg'

class LandingPage extends React.Component {
  render() {
    const imageLq = this.props.imageLq
    const imageHq = this.props.imageHq

    return (
      <section className="landingpage-section">
        <div className="landingpage-cover container">
          <div className="square-wrapper">
            <div className="square-wrapper__child">
              <Img resolutions={imageHq} fadeIn={true} outerWrapperClassName="square-wrapper__content" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          <div className="landingpage-link">
            <ButtonLink
              linkTo={'#section-one'}
              linkTitle={'Jetzt entdecken'}
            />
          </div>
          
          <img
            src={iconArrowDown} alt="Icon Arrow Down"
            className="landingpage-icon"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${imageLq.src})` }}
          className="landingpage-background"
        ></div>
      </section>
    )
  }
};

export default LandingPage;