import React, { Component } from 'react';

class Share extends Component {
  render() {
    const { link } = this.props;
    return (
      <div className='share'>

        <div
          className="fb-like"
          data-href={link}
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-show-faces="true"
          data-share="true"
        ></div>

        <a href={link} target='__blank'>
          Book >>
        </a>

      </div>
    )
  }
};

export default Share;