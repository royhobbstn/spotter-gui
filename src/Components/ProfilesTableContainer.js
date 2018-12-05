import { connect } from 'react-redux';
import { ProfilesTable } from './ProfilesTable.js';

import { thunkDeleteProfile } from '../Redux/Profile/profile_thunks';

const mapStateToProps = state => {
  return {
    launch_profiles: state.profile_reducer.launch_profiles,
    delete_profile_in_progress: state.profile_reducer.delete_profile_in_progress
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    deleteProfile: profile_name => {
      dispatch(thunkDeleteProfile(profile_name));
    },
    editProfile: profile_name => {
      // TODO
    }
  };
};

export const ProfilesTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilesTable);
