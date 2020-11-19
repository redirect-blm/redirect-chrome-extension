export default (state = {category: 'Clothing, Shoes & Jewelry', searchTerm: 'lipstick' }, action) => {
    switch (action.type) {
      case 'SEND_DOM_CONTENT':
        return {...state, category: action.data.category, searchTerm: action.data.searchTerm };
      default:
        return state;
    }
  };