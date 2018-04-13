import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import './index.scss';

class ButtonLink extends React.Component {
  render() {
    const linkTo = this.props.linkTo;
    const title = this.props.linkTitle;
    const classNameProp = this.props.className;

    return (
      <OutboundLink
        href={linkTo}
        className={`btn-link ${classNameProp}`}
      >{title}</OutboundLink>
    )
  }
};

export default ButtonLink;
