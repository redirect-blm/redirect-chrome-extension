export default (state = { mode: 'production', port: 3001 }, action) => {
    // Set mode to development if you want to host the API layer on a local server
    switch (action.type) {
      case 'SEND_CONFIG':
        return action.data;
      default:
        return state;
    }
  };