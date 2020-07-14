import React from 'react';
import Card from 'react-bootstrap/Card';
import BusinessLink from '../BusinessCard/BusinessLink';
import BusinessList from '../BusinessList/BusinessList';

const BusinessCard = props => {
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
          <BusinessLink text="Go to Website" site={props.site}/>
        </Card.Body>
      </Card>
    </>
  );
};

export default BusinessCard;
