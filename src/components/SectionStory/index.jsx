import React from 'react';
import Img from 'gatsby-image';

import './index.scss';

class SectionStory extends React.Component {
  render() {
    const image = this.props.imageStory;

    return (
      <section className="story-section">
        <div className="container">
          <h2 className="title">Die Entstehung</h2>
          <div className="square-wrapper">
            <div className="square-wrapper__child">
              <Img
                resolutions={image}
                outerWrapperClassName="square-wrapper__content"
                style={{ 
                  width: '100%', 
                  height: '100%'
                }}
              />
            </div>
          </div>

          <p className="story-section__text">
            Zu Beginn dieses Jahres haben wir einen weiteren Meilenstein unserer Bandgeschichte erreicht und unseren ersten Studio-Aufnahmen gemacht. Nach rund drei Tagen pausenloser Vorbereitung machten wir uns auf die Socken Richtung Ostschweiz. Genauer gesagt, St. Margrethen. Innert weiterer drei Tagen sollten wir dort die Aufnahmen für unsere erste EP machen. Wichtig war uns, dass die Songs von einem breiten Repertoire herrühren. Die folgenden Songs haben das Rennen gemacht:
          </p>
          <ul className="story-section__list">
            <li>Break Free</li>
            <li>The Poor Do Call</li>
            <li>Music Is Our Life</li>
            <li>Fuck The System</li>
          </ul>
          <p className="story-section__text">
            Hier sind alte und neue Songs inbegriffen. Die einen sind etwas schwerer, die anderen etwas «verspielter» &ndash; schlicht ein abwechslungsreicher Mix.
          </p>
        </div>
      </section>
    )
  }
};

export default SectionStory;