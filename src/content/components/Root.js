import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scraper } from '../utils';
const scraper = new Scraper(window.document);

class Root extends Component {
  constructor(props) {
    super(props);
    this.category = this.category.bind(this);
    this.brands = this.brands.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.page = this.page.bind(this);
  }
  category() {
    return scraper.category || 'All';
  }
  brands() {
    return scraper.brands;
  }
  searchTerm() {
    return scraper.searchTerm;
  }
  page() {
    return scraper.page;
  }
  // on mount dispatch the stringified dom
  componentDidMount() {
    const category = this.category();
    const brands = this.brands();
    const searchTerm = this.searchTerm();
    const page = this.page();
    const data = { category, brands, searchTerm, page };
    this.props.sendDOM({
      type: 'SEND_DOM_CONTENT',
      data
    });
  }

  // Hidden div that contains the app running on amazon.com
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

const mapDispatch = dispatch => {
  return {
    sendDOM: ({ type, data }) => dispatch({ type, data })
  };
};

export default connect(mapStateToProps, mapDispatch)(Root);
