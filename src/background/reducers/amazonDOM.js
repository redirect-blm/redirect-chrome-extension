export default (state = {}, action) => {
    switch (action.type) {
      case 'SEND_DOM':
        return { amazonDOM: data };
      default:
        return state;
    }
  };
  