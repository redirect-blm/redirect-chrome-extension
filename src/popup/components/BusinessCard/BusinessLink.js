import React from 'react';
import Button from 'react-bootstrap/Button';
import LinkPreview from './LinkPreview';
import axios from 'axios';

class BusinessLink extends React.Component {
    constructor() {
      super();
      this.state = {
        showPreview: false,
        previewData: {},
        linkError: null
      };
      this.togglePreview = this.togglePreview.bind(this);
    }
    componentDidMount() {
      const { props: { site, baseUrl } } = this;
      const component = this;
      axios.get(`${baseUrl}/keys/linkPreview`).then(({data}) => {
          return axios.get(`http://api.linkpreview.net/?key=${data}&q=${site}`).then(({data}) => {
              console.log(data);
              component.setState({ previewData: data })
          })
      }).catch(error => {
          component.setState({ linkError: error })
      })
    }
    togglePreview(showPreview) {
      this.setState({ showPreview })
    }
    render() {
      const { props: { text, site }, togglePreview, state: { showPreview, previewData, linkError } } = this;
      return (
        <>
          <style type="text/css">
            {`
              .btn-redirect {
                background-color: #2eca7f;
              }
            `}
          </style>
          <div style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <LinkPreview showPreview={showPreview} text={`here's some text`} site={site} previewData={previewData} linkError={linkError} />
            <Button onMouseEnter={() => togglePreview(true) } variant="redirect" onClick={() => window.open(site)}>
                {text}
            </Button>
          </div>
        </>
      );
    }
};
  
export default BusinessLink;
  