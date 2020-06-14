import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
// import Axios from 'axios';

export default function EthicsCard() {
  //   const [company, setCompany] = useState();
  //   useEffect(() => {
  //     Axios.get('API call').then(res => {
  //       setCompany(res.data);
  //     });
  //   });

  var temp = {
    title: 'Amazon',
    description: 'Overview of ethics statement.'
  };

  return (
    <div className="text-center">
      <h4>{temp.title}'s Ethics</h4>
      <Card className="mt-3 mb-3">
        <Card.Body>
          <Card.Title>{temp.title}</Card.Title>
          <Card.Text>{temp.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
