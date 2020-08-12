import React from 'react';
import Card from 'react-bootstrap/Card';
import BusinessLink from '../BusinessCard/BusinessLink';

const BusinessCard = props => {
  let showPreview = false
  return (
    <>
      <style type="text/css">
        {`
          .btn-redirect {
            background-color: #2eca7f;
          }
        `}
      </style>
      <Card className="mx-auto">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <BusinessLink text="Go to Website" site={props.site} showPreview={showPreview} baseUrl={props.baseUrl} />
        </Card.Body>
      </Card>
    </>
  );
};

export default BusinessCard;
