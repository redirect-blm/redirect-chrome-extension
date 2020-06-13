import React, { Component } from 'react';
import Header from '../components/Header/Header';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner'

export default class Root extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <LoadSpinner />
      </div>
    );
  }
}
