import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { domContent, sendDOM } = this.props;
    return (
      <div>
        <h1>AMAZON.COM</h1>
        <select
          value={domContent.category}
          onChange={e => sendDOM({
              type: 'SEND_DOM_CONTENT',
              data: { category: e.target.value }})}
        >
            <option value='Clothing, Shoes & Jewelery'>Clothing, Shoes &nbsp; Jewelery</option>
            <option value="Books">Books</option>
            <option value="Appliances">Appliances</option>
            <option value="Apps & Games">Apps &nbsp; Games</option>
            <option value="Arts, Crafts & Sewing">Arts, Crafts &nbsp; Sewing</option>
            <option value="CDs & Vinyl">CDs &nbsp; Vinyl</option>
            <option value="Automated Parts & Accesories">Automated Parts &nbsp; Accesories</option>
            <option value="Baby">Baby</option>
            <option value="Cell Phones & Accessories">Cell Phones &nbsp; Accessories</option>
            <option value="Collectibles & Fine Art">Collectibles &nbsp; Fine Art</option>
            <option value="Computers">Computers</option>
            <option value="Handmade">Handmade</option>
            <option value="Premium Beauty">Premium Beauty</option>
            <option value="Toys & Games">Toys &nbsp; Games</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Luggage & Travel Gear">Luggage &nbsp; Travel Gear</option>
            <option value="Musical Insturments">Musical Insturments</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    domContent: state.domContent
  };
};

const mapDispatch = dispatch => {
    return {
      sendDOM: ({ type, data }) => dispatch({ type, data })
    };
};

export default connect(mapStateToProps, mapDispatch)(Dom);
