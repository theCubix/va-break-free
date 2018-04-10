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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, fuga! Praesentium alias fugit explicabo minus obcaecati, nemo optio beatae est? Ab sapiente quidem esse, rerum blanditiis odio quasi, iure laborum aut impedit eius natus nostrum deserunt officiis odit minus, saepe minima facilis unde. Sed optio inventore voluptas doloribus, ex ad alias nemo iure repudiandae voluptatem quasi molestias omnis tempore ducimus esse vel quos explicabo voluptate atque nam? Perspiciatis, incidunt architecto enim natus minus voluptatem inventore dolor. Sed amet magni laborum pariatur illo. Nostrum saepe natus exercitationem fugiat et esse quod non facilis, consectetur pariatur, ratione velit, alias nulla eligendi eos!
          </p>
        </div>
      </section>
    )
  }
};

export default SectionStory;