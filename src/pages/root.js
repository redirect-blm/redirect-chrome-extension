import React, { Component } from 'react';
import Header from '../components/Header/Header';
import BusinessList from '../components/BusinessList/BusinessList';
import EthicsCard from '../components/EthicsCard/EthicsCard';
import './root.module.css';

export default class Root extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <EthicsCard />
        <BusinessList />
      </div>
    );
  }
}