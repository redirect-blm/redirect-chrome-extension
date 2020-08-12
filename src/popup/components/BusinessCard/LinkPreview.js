import React from 'react';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

class LinkPreview extends React.Component {
    constructor() {
        super();
    }
    render() {
      const { props: { showPreview, previewData } } = this;
      const display = showPreview ? 'flex' : 'none';
      return (
        <div style={{ display, position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '-100px', width: '100%', height: '100px', zIndex: 5, backgroundColor: 'white', border: '1px solid' }}>
            { 
              previewData ?
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div>{previewData.title}</div>
                    <div style={{ backgroundImage: `url(${previewData.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '50%', height: '40px' }} />
                </div> : <LoadSpinner noQuote={true} />
            }
        </div>
      );
    }
};

export default LinkPreview;