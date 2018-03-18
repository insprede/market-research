import React, { Component } from 'react';
import firebase from 'firebase';

import Share from './share';
import Loading from './loading';
// import data from './data';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      processing: false,
      data: []
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC4rf0FBOlZSLVuM7iiDpXOY9OxnmNdy6k',
      authDomain: 'market-research-c8482.firebaseapp.com',
      databaseURL: 'https://market-research-c8482.firebaseio.com/',
      projectId: 'market-research-c8482',
      storageBucket: 'market-research-c8482.appspot.com',
      messagingSenderId: '145569036798'
    });
  }

  componentDidMount() {
    const context = this;
    firebase.database().ref('quotes').once('value', function(snapshot) {
      console.log(snapshot.val());
      context.setState({ data: snapshot.val() });
    });
  }

  componentDidUpdate() {
    // (function(d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
    document.get
    console.log('component updated!!!!');
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
    const { data } = this.state;
    console.log(data);
    console.log(this.state.data);
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