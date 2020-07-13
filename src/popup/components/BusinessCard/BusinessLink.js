import React from 'react';
import Button from 'react-bootstrap/Button';

const BusinessLink = props => {
    const { text, site } = props
    return (
      <>
        <style type="text/css">
          {`
            .btn-redirect {
              background-color: #2eca7f;
            }
          `}
        </style>
        <Button variant="redirect" onClick={() => window.open(site)}>
            {text}
        </Button>
      </>
    );
  };
  
  export default BusinessLink;
  