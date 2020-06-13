import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const businessCard = props => (
  <Card style={{ width: '18rem' }} className="mx-auto mt-3 mb-3">
    <Card.Img />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Button variant="dark" onClick={() => window.open(props.site)}>
        Go to website
      </Button>
    </Card.Body>
  </Card>
);

export default businessCard;
