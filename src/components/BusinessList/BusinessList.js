import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import BusinessCard from '../BusinessCard/BusinessCard';

const businessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://redirect-blm.herokuapp.com/api/business/getBusinesses'
    ).then(res => {
      setBusinesses(res.data);
    });
  });

  let lst =
    businesses.length === 0 ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading businesses...</span>
      </Spinner>
    ) : (
      businesses.map(child => {
        console.log(child);
        return (
          <BusinessCard title={child.title} description={child.description} />
        );
      })
    );
  return <>{lst}</>;
};

export default businessList;
