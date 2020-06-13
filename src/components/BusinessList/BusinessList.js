import React from 'react';
import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';
import { Scraper } from '../../utils';

class BusinessList extends React.Component {
  constructor() {
    super();
    this.state = {
      lst: [],
      error: null
    }
  }
  componentDidMount() {
    const component = this;
    const category = Scraper.category(window.document);
    Axios({
      method: 'get',
      withCredentials: true,
      baseUrl: 'https://redirect-blm.herokuapp.com/api/business/getone/category',
      params: {
        category
      }
    }).then(({ data }) => {
      component.setState({ lst: data })
    }).catch(error => {
      component.setState({ error });
    })
  }
  lst() {
    const { businesses, error } = this;
    if (error) return <div>{error}</div>
    return businesses.length === 0 ? (
      <Spinner />
    ) : (
      businesses.map(child => {
        return (
          <BusinessCard
            key={child.title}
            title={child.title}
            description={child.description}
            site={child.website}
          />
        );
      })
    );
  }
  render() {
    return (
      <div className="text-center">
        <h4>Black-Owned Alternatives</h4>
        {lst}
      </div>
    );
  }
};

export default BusinessList;
