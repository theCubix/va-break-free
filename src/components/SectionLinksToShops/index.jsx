import React from 'react';

import ButtonLink from '../../components/ButtonLink';

import './index.scss';

class SectionLinksToShops extends React.Component {
  render() {
    const links = this.props.links;
    const listItems = links.map((link) => 
      <ButtonLink
        key={link.id}
        linkTo={link.url}
        linkTitle={link.title}
        className="button-link--shop"
      />
    );
    return (
      <section className="music-shop-section">
        <div className="container">
          <h2 className="title">Hol dir die EP bei</h2>
          <div className="music-shop-section__list">
            {listItems}
          </div>
        </div>
      </section>
    )
  }
};

export default SectionLinksToShops;