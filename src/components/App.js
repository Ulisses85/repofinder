import React, { Component } from 'react';
import Header from './Header.js';
import TextInput from './TextInput.js';
import SearchItems from './SearchItems.js';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <TextInput />
        <SearchItems />
      </div>
    )
  }
}
