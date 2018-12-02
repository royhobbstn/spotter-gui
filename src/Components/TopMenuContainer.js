import { connect } from 'react-redux';
import { TopMenu } from './TopMenu.js';

import { thunkGetInstanceData } from '../Redux/Status/status_thunks';
import { thunkClickConfigurePage } from '../Redux/Configure/configure_thunks';
import { actionClickSetupPage } from '../Redux/Setup/setup_actions';

const mapStateToProps = state => {
  return {
    active_menu_item: state.initial_reducer.active_menu_item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickSetupPage: () => {
      dispatch(actionClickSetupPage());
    },
    clickConfigurePage: () => {
      dispatch(thunkClickConfigurePage());
    },
    clickStatusPage: () => {
      dispatch(thunkGetInstanceData());
    }
  };
};

export const TopMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
