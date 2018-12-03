import { connect } from 'react-redux';
import { ProfilesTable } from './ProfilesTable.js';

import { thunkDeleteProfile } from '../Redux/Configure/configure_thunks';

const mapStateToProps = state => {
  return {
    launch_profiles: state.initial_reducer.launch_profiles,
    delete_profile_in_progress: state.configure_reducer.delete_profile_in_progress
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    deleteProfile: profile_name => {
      dispatch(thunkDeleteProfile(profile_name));
    }
  };
};

export const ProfilesTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilesTable);
