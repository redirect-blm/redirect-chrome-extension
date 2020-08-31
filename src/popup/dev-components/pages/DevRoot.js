import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import BusinessList from '../../components/BusinessList/BusinessList';
import Dom from '../components/Dom';
import './dev-root.module.css';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { domContent, config } = this.props;
    return (
      <div id="main">
        <Dom />
        <div id="popup">
          <Header />
          <BusinessList domContent={domContent} config={config || {}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    domContent: state.domContent,
    config: state.config
  };
};

export default connect(mapStateToProps)(Root);
