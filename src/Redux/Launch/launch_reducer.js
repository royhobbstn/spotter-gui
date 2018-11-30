//

const default_state = {
  launch_selected_services: [],
  selected_launch_profile: 'None',
  available_services: ['aws', 'microsoft', 'google'], // should probably be somewhere else
  launch_page_status: '',
  launch_page_content: ''
};

const launch_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_LAUNCH_PROFILE':
      return Object.assign({}, state, {
        selected_launch_profile: action.profile
      });

    case 'TOGGLE_SERVICE_CHECKBOX':
      let updated_services = [];
      if (state.launch_selected_services.includes(action.service)) {
        updated_services = state.launch_selected_services.filter(s => s !== action.service);
      } else {
        updated_services = [...state.launch_selected_services, action.service];
      }

      return Object.assign({}, state, {
        launch_selected_services: updated_services
      });

    case 'RESET_LAUNCH_PAGE':
      return Object.assign({}, state, {
        launch_page_status: 'loading',
        launch_page_content: 'Loading'
      });
    case 'DISPLAY_LAUNCH_PAGE_ERROR':
      return Object.assign({}, state, {
        launch_page_status: 'error',
        launch_page_content: action.error
      });
    case 'DISPLAY_LAUNCH_PAGE_CONTENT':
      return Object.assign({}, state, {
        launch_page_status: 'content',
        launch_page_content: action.content
      });

    default:
      return state;
  }
};

export default launch_reducer;
