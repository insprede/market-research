import React, { Component } from 'react';

import data from './data';

export default class App extends Component {
  render() {
    return (
      <div>
        {
          data.map(quote =>
            <div>
              <p>"{quote.text}"</p>
              <p>--{quote.author}</p>
              <a href={quote.link} target='__blank'>Check out the book</a>
            </div>
          )
        }
      </div>
    )
  }
};