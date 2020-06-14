import React, {Component} from 'react';
import { connect } from 'react-redux';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  // on moount dispatch the stringified dom
  componentDidMount() {
      const { document } = window
      this.props.sendDOM({
        type: 'SEND_DOM',
        data: JSON.stringify(document)
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

const mapDispatch = dispatch => {
    return {
      sendDOM: ({ type, data }) => dispatch({ type, data })
    };
};

export default connect(mapStateToProps, mapDispatch)(Root);
