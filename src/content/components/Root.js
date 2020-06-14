import React, {Component} from 'react';
import { connect } from 'react-redux';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const { document } = window
      this.props.dispatch({
        type: 'SEND_DOM',
        data: document
    });
  }

  // Hidden div that contains the app running on amazon.com
  render() {
    return <div />
  }
}

const mapStateToProps = (state) => {
  return {
    amazonDOM: state.amazonDOM
  };
};

export default connect(mapStateToProps)(Root);
