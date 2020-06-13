import React, { Component } from 'react';
import Header from '../components/Header/Header';

export default class Root extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
