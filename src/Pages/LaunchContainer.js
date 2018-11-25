//

import { connect } from 'react-redux';
import { Launch } from './Launch.js';

import { actionToggleServiceCheckbox } from '../Redux/app_actions';

const mapStateToProps = state => {
  return {
    available_services: state.app_reducer.available_services,
    launch_selected_services: state.app_reducer.launch_selected_services,
    saved_profiles: state.app_reducer.saved_profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleServiceCheckbox: service => {
      dispatch(actionToggleServiceCheckbox(service));
    }
  };
};

export const LaunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch);
