import React from 'react';
import Spinner from '../LoadSpinner/LoadSpinner';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';

class EthicsCard extends React.Component {
  constructor() {
    super();
    this.state = {
      ethics: {},
      error: null
    };
    this.tmp = this.tmp.bind(this);
  }
  componentDidMount() {
    const {
      domContent: { brands }
    } = this.props;
    const component = this;
    const searchBrand = brands ? encodeURIComponent(brands[0]) : 'Amazon';
    Axios.get(
      `https://redirect-blm.herokuapp.com/api/boycottList/getByName/${searchBrand}`
    )
      .then(({ data }) => {
        data = data[0] || {};
        component.setState({ ethics: data });
      })
      .catch(error => {
        component.setState({ error: `Error getting businesses: ${error}` });
      });
  }
  tmp() {
    const { ethics, error } = this.state;
    if (error) return <div>{error}</div>;

    return !ethics.reason ? (
      <Spinner />
    ) : (
      <Card className="mt-3 mb-3">
        <Card.Body>
          <Card.Title>{ethics.businessName}</Card.Title>
          <Card.Text>{ethics.reason}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  render() {
    const { tmp } = this;
    return (
      <div className="text-center">
        <h4 style={{ padding: '0 5px' }}>
          Something to consider while you shop :)
        </h4>
        {tmp()}
      </div>
    );
  }
}
export default EthicsCard;
