export default (state = {category: 'Clothing, Shoes & Jewelery' }, action) => {
    // TODO: Add loggin middleware to replace console logs
    // Currently these logs can be viewed at chrome://extensions in developer mode
    console.log('action type = ', action.type)
    console.log('action data = ', action.data)
    switch (action.type) {
      case 'SEND_DOM_CONTENT':
        return {...state, category: action.data.category };
      default:
        return state;
    }
  };