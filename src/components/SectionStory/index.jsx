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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea vero, id, impedit in tempore quos animi natus laboriosam voluptatum hic, iure itaque totam esse qui magni officia pariatur optio quibusdam voluptatibus sapiente perferendis neque quis. Quod, doloribus excepturi quo rem pariatur officia beatae eum! Inventore, voluptas autem maiores quis nam sit saepe aliquid minus nemo voluptates porro sunt voluptate assumenda nesciunt odio laudantium quidem vel id accusantium enim qui? Deserunt suscipit error veniam nobis dignissimos vitae exercitationem, laborum nam facere quis vero nesciunt odit pariatur quisquam quam harum doloribus numquam quod, vel, mollitia magnam enim assumenda. Ipsum quia impedit atque necessitatibus cum nesciunt blanditiis asperiores ad sequi dolorum optio dolorem facilis, nam aliquam consectetur dolor laborum quos et deserunt, animi voluptatem sapiente obcaecati. Suscipit perferendis deleniti pariatur aspernatur magnam, maiores cum itaque ad, perspiciatis, sint voluptate at quisquam? Fugit repellendus at dolore consectetur quae, fugiat earum iure rem, alias eaque saepe aliquam eveniet sunt eos ullam delectus rerum modi facere vitae, deleniti quas! Minus vero ipsa, sunt quos nemo sed ad laudantium repellat voluptates, in tempore veritatis veniam, eveniet quasi reprehenderit corporis! Deleniti, debitis animi. Ad modi nisi, quis a praesentium dolorum consequuntur incidunt minima neque, iste tempore voluptates hic eum atque laboriosam nemo? Totam deserunt aliquid doloribus illum, obcaecati libero esse eaque placeat eos, pariatur voluptatum repudiandae necessitatibus dolor amet quas distinctio veritatis odio maxime assumenda officiis! Iure, maiores voluptas perspiciatis eveniet iste atque voluptatem, omnis, recusandae excepturi nulla dolores ducimus eos accusantium. Consequuntur beatae eos modi voluptas? Voluptates atque eos iste odio animi inventore ex harum fuga tempora porro, unde voluptatum beatae molestias ipsum vero nisi laborum cumque ab eaque natus quaerat sed. Numquam molestias, mollitia, cum vitae cupiditate alias quos ex harum quia minima corporis, atque accusamus fuga rerum sit deserunt autem delectus placeat at ducimus.
          </p>
        </div>
      </section>
    )
  }
};

export default SectionStory;