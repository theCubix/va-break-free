import React from 'react';

import './index.scss';

class ButtonLink extends React.Component {
  render() {
    const linkTo = this.props.linkTo;
    const title = this.props.linkTitle;
    const classNameProp = this.props.className;

    return (
      <a
        href={linkTo}
        className={`btn-link ${classNameProp}`}
      >{title}</a>
    )
  }
};

export default ButtonLink;
