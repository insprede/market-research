import React, { Component } from 'react';

import Share from './share';
import data from './data';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Inspiread</h1><br/>
        {
          data.map(quote =>
            <div key={quote.name} id={quote.name} className='quote-card'>
              <p>"{quote.text}"</p>
              <p className='author light-text'>--{quote.author}</p>
              <Share link={quote.link} />
            </div>
          )
        }
        <a className="typeform-share button" href="https://tim796.typeform.com/to/driloZ" data-mode="popup" target="_blank">Need More?
        </a>

      </div>
    )
  }
};