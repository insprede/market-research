import React, { Component } from 'react';
import firebase from 'firebase';

class Share extends Component {
  recordClick = () => {
    const { link, name, updateState } = this.props;
    // const link = 'https://tim796.typeform.com/to/driloZ';

    updateState(true);
    const endPoint = name.replace(/[^a-zA-Z0-9]/g,' ');

    firebase.database().ref(`/clicks/${endPoint}`).once('value')
      .then(data => data.node_.value_)
      .then(value => {
        const isNew = !value;
        if ( isNew ) {
          return firebase.database().ref(`/clicks/${endPoint}`).set(1);
        } else {
          const newData = {};
          newData[endPoint] = value + 1;
          return firebase.database().ref(`/clicks/`).update(newData);
        }
      })
      .then(resp => updateState(false))
      .then(a => console.log('Success!',endPoint))
      .then(b => window.open(link, '_blank'))
      .catch(err => console.error(name,'record failed...', err));
  }

  render() {
    const { link, name } = this.props;
    console.log(link, name);
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

        <div>
          <span className='link' onClick={this.recordClick} >
            Inspired ? Tell more
          </span>
        </div>

      </div>
    )
  }
};

export default Share;