import React from 'react';
import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';

class BusinessList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      businesses: [],
      linkPreviewKey: null,
      error: null,
      category: props.domContent.category,
      dataReady: false
    };
    this.lst = this.lst.bind(this);
    this.getBusinessesByCategory = this.getBusinessesByCategory.bind(this);
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    this.getLinkPreviewKey = this.getLinkPreviewKey.bind(this);
    this.baseUrl = this.baseUrl.bind(this);
    // this.getBoycottedBusinesses = this.getBoycottedBusinesses.bind(this);
  }
  baseUrl() {
    // const { config: { mode, port } } = this.props;
    // console.log(`APIs runing in ${mode} mode`)
    // return mode === `development` ?  `http://localhost:${port}/api` : 'https://redirect-blm.herokuapp.com/api'
    return 'https://redirect-blm.herokuapp.com/api'
  }
  getBusinessesByCategory() {
    const {
      props: {
        domContent: { category }
      }, baseUrl
    } = this;
    const component = this;
    Axios.get(
      `${baseUrl()}/businesses/getByCategory/${encodeURIComponent(
        category
      )}`
    )
      .then(({ data }) => {
        component.setState({ businesses: data, dataReady: true });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  getAllBusinesses() {
    const component = this;
    Axios.get(`${component.baseUrl()}/businesses/getAll`)
      .then(({ data }) => {
        component.setState({ businesses: data, dataReady: true });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  getLinkPreviewKey() {
    const component = this;
    Axios.get(`${component.baseUrl()}/keys/linkPreview`)
      .then(({data}) => {
        component.setState({ linkPreviewKey: data, dataReady: true });
      })
      .catch(e => {
        console.log(e);
      })
  }
  componentDidMount() {
    const {
      getAllBusinesses,
      getBusinessesByCategory,
      getLinkPreviewKey,
      state: { category }
    } = this;
    console.log(`business list mounting in ${this.props.config.mode} mode with category = ${category}`)
    if (category && category !== 'All') {
      getBusinessesByCategory();
    } else {
      getAllBusinesses();
    }
    getLinkPreviewKey();
  }
  // TODO: Figure out why state doesn't update when props change
  componentDidUpdate(prevProps, state) {
    if (prevProps.domContent.category !== this.props.domContent.category) {
      this.setState({ category: this.props.domContent.category})
      if (this.state.category && this.state.category !== 'All') {
        this.getBusinessesByCategory();
      } else {
        this.getAllBusinesses();
      }
      this.getLinkPreviewKey();
    }
  }
  lst() {
    const { businesses, error, dataReady } = this.state;
    if (error) return <div>{error}</div>;
    return !dataReady ? (
      <Spinner />
    ) : (
      businesses.length === 0 ?
        <div>No Data For This Category :(</div>
        :
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
