import React from 'react';

import './index.scss';

class SectionMusicIsLife extends React.Component {
  render() {
    return (
      <section className="music-is-life-section">
        <div className="container">
          <h2 className="title">Music Is Our Life<br/>[Live From The Bandroom]</h2>
          <div className="square-wrapper">
            <div className="square-wrapper__child">
              <iframe
                className="music-is-life-section__video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tyvSVg-Rh9g?rel=0&amp;showinfo=0"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default SectionMusicIsLife;