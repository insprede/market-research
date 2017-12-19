import React, { Component } from 'react';
import firebase from 'firebase';

import Share from './share';
import Loading from './loading';
import data from './data';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      processing: false
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCG4dS3poDsjB2DlsCq6vTZBG9eiaFe9KQ',
      authDomain: 'inspiread-4eec7.firebaseapp.com',
      databaseURL: 'https://inspiread-4eec7.firebaseio.com',
      projectId: 'inspiread-4eec7',
      storageBucket: 'inspiread-4eec7.appspot.com',
      messagingSenderId: '762894700612'
    });
  }

  renderLoading() {
    if ( !this.state.processing ) {
      return null;
    }

    return (
      <Loading />
    )
  }

  updateState = (processing) => this.setState({ processing });

  render() {
    return (
      <div className='container'>
        <h1>Inspiread</h1><br/>
        { this.renderLoading() }
        {
          data.map(quote =>
            <div key={quote.name} id={quote.name} className='quote-card'>
              <p>"{quote.text}"</p>
              <p className='author light-text'>--{quote.author}</p>
              <Share link={quote.link} name={quote.name} updateState={this.updateState} />
            </div>
          )
        }

        <center>
          <a
            className="typeform-share button"
            href="https://tim796.typeform.com/to/driloZ"
            data-mode="popup"
            target="_blank"
          >
            Need More?
          </a>
        </center>

      </div>
    )
  }
};