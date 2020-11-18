import React from 'react';
import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';

class BusinessList extends React.Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
      linkPreviewKey: null,
      error: null
    };
    this.lst = this.lst.bind(this);
    this.getBusinessesByCategory = this.getBusinessesByCategory.bind(this);
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    this.getLinkPreviewKey = this.getLinkPreviewKey.bind(this);
    this.baseUrl = this.baseUrl.bind(this);
    this.header = this.header.bind(this);
    // this.getBoycottedBusinesses = this.getBoycottedBusinesses.bind(this);
  }
  baseUrl() {
    const { mode, port } = this.props.domContent;
    return mode === `development`
      ? `http://localhost:${port}/api`
      : 'https://redirect-blm.herokuapp.com/api';
  }
  getBusinessesByCategory() {
    const {
      props: {
        domContent: { category }
      },
      baseUrl
    } = this;
    const component = this;
    Axios.get(
      `${baseUrl()}/businesses/getByCategory/${encodeURIComponent(category)}`
    )
      .then(({ data }) => {
        component.setState({ businesses: data });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  getAllBusinesses() {
    const component = this;
    Axios.get(`${component.baseUrl()}/businesses/getAll`)
      .then(({ data }) => {
        component.setState({ businesses: data });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  getLinkPreviewKey() {
    const component = this;
    Axios.get(`${component.baseUrl()}/keys/linkPreview`)
      .then(({ data }) => {
        component.setState({ linkPreviewKey: data });
      })
      .catch(e => {
        console.log(e);
      });
  }
  componentDidMount() {
    const {
      getAllBusinesses,
      getBusinessesByCategory,
      getLinkPreviewKey,
      props: {
        domContent: { category }
      }
    } = this;
    if (category && category !== 'All') {
      getBusinessesByCategory();
    } else {
      getAllBusinesses();
    }
    getLinkPreviewKey();
  }
  header() {
    return `Black-Owned Alternatives in category: '${this.props.domContent
      .category || 'All'}'`;
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
    const { lst, header } = this;
    return (
      <div className="text-center">
        <h4>{header()}</h4>
        {lst()}
      </div>
    );
  }
}

export default BusinessList;
