import React from 'react';
import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';

class BusinessList extends React.Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
      error: null
    }
    this.lst = this.lst.bind(this)
  }
  componentDidMount() {
    const component = this;
    Axios({
      method: 'get',
      withCredentials: true,
      baseUrl: 'https://redirect-blm.herokuapp.com/api/business/getmany/category',
      params: {
        category: 'All'
      }
    }).then(({ data }) => {
      component.setState({ businesses: data })
    }).catch(error => {
      component.setState({ error: `Error getting businesses: ${error}` });
    })
  }
  lst() {
    const { businesses, error } = this.state;
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
    const { lst } = this;
    return (
      <div className="text-center">
        <h4>Black-Owned Alternatives</h4>
        {lst()}
      </div>
    );
  }
  
};

export default BusinessList;
