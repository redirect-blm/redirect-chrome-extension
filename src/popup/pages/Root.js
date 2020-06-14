import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header/Header';
import BusinessList from '../components/BusinessList/BusinessList';
import EthicsCard from '../components/EthicsCard/EthicsCard';

import './root.module.css';

class Root extends Component {
  constructor(props) {
    super(props);
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

const mapStateToProps = (state) => {
  return {
    amazonDOM: state.amazonDOM
  };
};

export default connect(mapStateToProps)(Root)