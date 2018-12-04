import { connect } from 'react-redux';
import { Profile } from './Profile.js';

import { actionShowAddProfileDialog } from '../Redux/Profile/profile_actions';

const mapStateToProps = state => {
  return {
    show_add_profile_dialog: state.profile_reducer.show_add_profile_dialog
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    showAddProfileDialog: () => {
      dispatch(actionShowAddProfileDialog());
    }
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
