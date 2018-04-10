import React from 'react';

import './index.scss';

class Footer extends React.Component {
  render() {
    const links = this.props.links;
    const listItems = links.map((link) => 
    <a
      href={link.url}
      className="footer-social-media__link">
      {link.content}
    </a>
    );
    return (
      <div>
        {listItems}
      </div>
    )
  }
};

export default Footer;
