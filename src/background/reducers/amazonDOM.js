export default (state = {}, action) => {
    // TODO: Add loggin middleware to replace console logs
    // Currently these logs can be viewed at chrome://extensions in developer mode
    console.log('action type = ', action.type)
    console.log('action data = ', action.data)
    switch (action.type) {
      case 'SEND_DOM':
        return { amazonDOM: action.data };
      default:
        return state;
    }
  };
  