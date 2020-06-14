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
      error: null,
    };
    this.lst = this.lst.bind(this);
  }
  componentDidMount() {
    const component = this;
    Axios.get('https://redirect-blmherokuapp.com/api/businesses/getAll')
    .then(({ data }) => {
        component.setState({ businesses: data });
      })
      .catch(error => {
        console.log(error)
        component.setState({ error: `Error getting businesses: ${error}` });
      });
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
    const { lst, props: { domContent } } = this;
    console.log('domContent = ', domContent);
    return (
      <div className="text-center">
        <h4>Black-Owned Alternatives for {domContent.category}</h4>
        {lst()}
      </div>
    );
  }
}



export default BusinessList;
