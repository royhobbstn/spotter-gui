//

const default_state = {
  image_list: {}
};

export const images_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'UPDATE_BASE_DATA':
      return Object.assign({}, state, {
        image_list: action.image_list
      });

    default:
      return state;
  }
};
