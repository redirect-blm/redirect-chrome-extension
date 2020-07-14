import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import BusinessList from '../components/BusinessList/BusinessList';
import './root.module.css';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { domContent } = this.props;
    return (
      <div>
        <Header />
        <BusinessList domContent={domContent} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    domContent: state.domContent
  };
};

export default connect(mapStateToProps)(Root);
