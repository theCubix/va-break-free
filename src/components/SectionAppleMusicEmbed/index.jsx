import React from 'react';
import Anchor from 'react-scrollable-anchor';

import './index.scss';

class SectionAppleMusicEmbed extends React.Component {
  render() {
    const title = this.props.title;
    const src = this.props.src;
    const height = this.props.height;
    const width = this.props.width;

    return (
      <Anchor id={'section-one'}>
        <section className="music-embedd-section">
          <div className="container">
            <h2 className="title">{title}</h2>
            <iframe
              src={src}
              height={height}
              width={width}
              frameborder="0"
              style={{
                border: 'none'
              }}
            ></iframe>
          </div>
        </section>
      </Anchor>
    )
  }
};

export default SectionAppleMusicEmbed;