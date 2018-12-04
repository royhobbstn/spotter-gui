//

const default_state = {
  instance_data: {},
  instance_data_loading: false,
  instance_data_error: false
};

export const status_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'INSTANCE_DATA_LOADING':
      return Object.assign({}, state, {
        instance_data_loading: true,
        instance_data_error: false
      });
    case 'INSTANCE_DATA_ERROR':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        instance_data_loading: false,
        instance_data_error: true
      });
    case 'LOAD_INSTANCE_DATA':
      return Object.assign({}, state, {
        instance_data_loading: false,
        instance_data_error: false,
        instance_data: action.instance_data
      });

    default:
      return state;
  }
};
