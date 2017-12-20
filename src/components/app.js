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
        <h1>Insprede</h1><br/>
        { this.renderLoading() }

        {/*<div className='card-board'>*/}
          {
            data.map(quote =>
              <div key={quote.name} id={quote.name} className='quote-card'>

                <div style={{display:'inline-block', width: '30%', height:'250px'}}>
                  <center><img style={{height:'250px'}} src={quote.image} /></center>
                </div>

                <div style={{display:'inline-block', width: '70%', height: '250px', verticalAlign:'top'}}>
                  <div style={{height: '250px', verticalAlign:'middle'}}>
                    <p style={{fontSize:'120%'}}>"{quote.text}"</p>
                    <p className='author light-text' style={{fontSize:'80%'}}>-- {quote.author}</p>
                    <p className='author light-text' style={{fontSize:'80%'}}>{quote.name}</p>
                  </div>
                </div>

                <Share link={quote.link} name={quote.name} updateState={this.updateState} />
              </div>
            )
          }
        {/*</div>*/}

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