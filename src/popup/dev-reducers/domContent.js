export default (state = {category: 'Clothing, Shoes & Jewelery' }, action) => {
    switch (action.type) {
      case 'SEND_DOM_CONTENT':
        return {...state, category: action.data.category };
      default:
        return state;
    }
  };