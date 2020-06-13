import React from 'react';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Logo from '../../assets/logo.png';

const loadSpinner = () => (
  <div className="justify-content-center text-center">
    <Image src={Logo} roundedCircle className="p-3" />
    <br />
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

export default loadSpinner;
