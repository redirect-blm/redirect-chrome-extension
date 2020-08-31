export default (state = {}, action) => {
    switch (action.type) {
      case 'SEND_DOM_CONTENT':
        return action.data;
      default:
        return state;
    }
  };