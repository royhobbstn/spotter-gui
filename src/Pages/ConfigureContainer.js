import { connect } from 'react-redux';
import { Configure } from './Configure.js';

import { actionShowAddProfileDialog } from '../Redux/Configure/configure_actions';

const mapStateToProps = state => {
  return {
    show_add_profile_dialog: state.configure_reducer.show_add_profile_dialog
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    showAddProfileDialog: () => {
      dispatch(actionShowAddProfileDialog());
    }
  };
};

export const ConfigureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
