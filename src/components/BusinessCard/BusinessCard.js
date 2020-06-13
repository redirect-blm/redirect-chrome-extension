import React from 'react';
import Card from 'react-bootstrap/Card';

const businessCard = props => {
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Button variant="primary">Go to website</Button>
    </Card.Body>
  </Card>;
};

export default businessCard;
