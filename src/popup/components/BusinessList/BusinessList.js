import React from 'react';
import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';
import category from '../../../background/reducers/domContent';

class BusinessList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      businesses: [],
      error: null
    };
    this.lst = this.lst.bind(this);
    this.getBusinessesByCategory = this.getBusinessesByCategory.bind(this);
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    // this.getBoycottedBusinesses = this.getBoycottedBusinesses.bind(this);
  }
  getBusinessesByCategory() {
    const {
      domContent: { category }
    } = this.props;
    console.log('category = ', category);
    const component = this;
    Axios.get(
      `https://redirect-blm.herokuapp.com/api/businesses/getByCategory/${encodeURIComponent(
        category
      )}`
    )
      .then(({ data }) => {
        component.setState({ businesses: data });
      })
      .catch(error => {
        console.log('error = ', error);
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  getAllBusinesses() {
    const component = this;
    Axios.get('https://redirect-blm.herokuapp.com/api/businesses/getAll')
      .then(({ data }) => {
        component.setState({ businesses: data });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  componentDidMount() {
    const {
      getAllBusinesses,
      getBusinessesByCategory,
      props: {
        domContent: { category }
      }
    } = this;
    if (category && category !== 'All') {
      getBusinessesByCategory();
    } else {
      getAllBusinesses();
    }
  }
  lst() {
    const { businesses, error } = this.state;
    if (error) return <div>{error}</div>;
    return businesses.length === 0 ? (
      <Spinner />
    ) : (
      businesses.map(child => {
        return (
          <BusinessCard
            key={child.businessName}
            title={child.businessName}
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
}

export default BusinessList;
