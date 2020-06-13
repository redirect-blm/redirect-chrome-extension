import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BusinessList from '../components/BusinessList/BusinessList';
import classes from './root.module.css';

export default class Root extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={classes.root}>
        <Header />
        <BusinessList />
      </div>
    );
  }
}
