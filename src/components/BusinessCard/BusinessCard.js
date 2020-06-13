import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const businessCard = props => {
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
          <Button variant="redirect" onClick={() => window.open(props.site)}>
            Go to website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default businessCard;
