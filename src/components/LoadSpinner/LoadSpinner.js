import React from 'react';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

const loadSpinner = () => (
  <>
    <Image src="../assets/logo.png" roundedCircle />
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading diverse choices...</span>
    </Spinner>

    <p>
      {/* Where are these quotes coming from ideally? */}
      "The time is always right to do something right" <br />- Martin Luther
      King
    </p>
  </>
);

export default loadSpinner;
