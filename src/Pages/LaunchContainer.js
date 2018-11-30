//

import { connect } from 'react-redux';
import { Launch } from './Launch.js';

import {
  actionToggleServiceCheckbox,
  actionUpdateSelectedLaunchProfile
} from '../Redux/Launch/launch_actions';

const mapStateToProps = state => {
  return {
    available_services: state.launch_reducer.available_services,
    launch_selected_services: state.launch_reducer.launch_selected_services,
    saved_profiles: state.initial_reducer.saved_profiles,
    selected_launch_profile: state.launch_reducer.selected_launch_profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleServiceCheckbox: service => {
      dispatch(actionToggleServiceCheckbox(service));
    },
    clickLaunchButton: () => {
      console.log('Launch Button Clicked');
    },
    changeSelectedLaunchProfile: val => {
      dispatch(actionUpdateSelectedLaunchProfile(val));
    }
  };
};

export const LaunchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch);
