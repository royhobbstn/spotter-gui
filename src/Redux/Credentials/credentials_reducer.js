//

const default_state = {
  credentials: {}
};

export const credentials_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'UPDATE_BASE_DATA':
      return Object.assign({}, state, {
        credentials: action.credentials
      });
    default:
      return state;
  }
};
