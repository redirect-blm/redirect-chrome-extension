import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import Spinner from '../LoadSpinner/LoadSpinner';
import BusinessCard from '../BusinessCard/BusinessCard';

const businessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // TODO: implement something like this eventually
    // Axios.get(
    //   'https://redirect-blm.herokuapp.com/api/business/getBusinesses'
    // ).then(res => {
    //   setBusinesses(res.data);
    // });
    var temp = [
      {
        title: 'Hope for Flowers',
        description: 'sustainable clothing for women',
        website: 'https://hopeforflowers.com/'
      },
      {
        title: 'Fubu',
        description: 'hip hop apparel',
        website: 'https://fubu.com/'
      },
      {
        title: 'Hanifa',
        description: 'apparel for women',
        website: 'https://hanifa.co/'
      }
    ];
    setBusinesses(temp);
  }, []);

  let lst =
    businesses.length === 0 ? (
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
  return (
    <div className="text-center">
      <h4>Black-Owned Alternatives</h4>
      {lst}
    </div>
  );
};

export default businessList;
