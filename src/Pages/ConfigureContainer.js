import { connect } from 'react-redux';
import { Configure } from './Configure.js';

import { thunkDeleteProfile } from '../Redux/app_thunks';

const mapStateToProps = state => {
  return {
    image_list: state.app_reducer.image_list,
    saved_profiles: state.app_reducer.saved_profiles,
    delete_profile_in_progress: state.app_reducer.delete_profile_in_progress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProfile: profile_name => {
      dispatch(thunkDeleteProfile(profile_name));
    }
  };
};

export const ConfigureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
