import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from '../LoadSpinner/LoadSpinner';
// import Axios from 'axios';

export default function EthicsCard() {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    //     Axios.get('API call').then(res => {
    //       setCompany(res.data);
    //     });
    var temp = {
      title: 'Amazon',
      description: 'Overview of ethics statement.'
    };
    setCompany(temp);
  }, []);

  let ethics =
    company === null ? (
      <Spinner />
    ) : (
      <Card className="mt-3 mb-3">
        <Card.Body>
          <Card.Title>{company.title}</Card.Title>
          <Card.Text>{company.description}</Card.Text>
        </Card.Body>
      </Card>
    );

  return (
    <div className="text-center">
      <h4>This Brand's Ethics</h4>
      {ethics}
    </div>
  );
}
