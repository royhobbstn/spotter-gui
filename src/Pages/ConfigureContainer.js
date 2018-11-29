import { connect } from 'react-redux';
import { Configure } from './Configure.js';

import { thunkDeleteProfile } from '../Redux/Configure/configure_thunks';
import {
  actionShowAddProfileDialog,
  actionCancelConfigureForm
} from '../Redux/Configure/configure_actions';

const mapStateToProps = state => {
  return {
    image_list: state.app_reducer.image_list,
    saved_profiles: state.app_reducer.saved_profiles,
    delete_profile_in_progress: state.app_reducer.delete_profile_in_progress,
    show_add_profile_dialog: state.app_reducer.show_add_profile_dialog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProfile: profile_name => {
      dispatch(thunkDeleteProfile(profile_name));
    },
    showAddProfileDialog: () => {
      dispatch(actionShowAddProfileDialog());
    },
    cancelForm: () => {
      dispatch(actionCancelConfigureForm());
    }
  };
};

export const ConfigureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
