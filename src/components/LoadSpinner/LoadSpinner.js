import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';

const loadSpinner = () => {
  useEffect(() => {
    Axios.get('https://type.fit/api/quotes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }, []);
  return (
    <div className="justify-content-center text-center">
      <Spinner animation="border" role="status" className="p-3">
        <span className="sr-only">Loading diverse choices...</span>
      </Spinner>

      <p className="p-3">
        {/* Where are these quotes coming from ideally? */}
        "The time is always right to do something right" <br />- Martin Luther
        King
      </p>
    </div>
  );
};

export default loadSpinner;
