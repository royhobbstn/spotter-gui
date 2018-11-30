import { connect } from 'react-redux';
import { TopMenu } from './TopMenu.js';

import { thunkGetInstanceData } from '../Redux/Status/status_thunks';
import { thunkClickConfigurePage } from '../Redux/Configure/configure_thunks';
import { thunkClickLaunchPage } from '../Redux/Launch/launch_thunks';
import { thunkClickSetupPage } from '../Redux/Setup/setup_thunks';

const mapStateToProps = state => {
  return {
    active_menu_item: state.initial_reducer.active_menu_item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickSetupPage: () => {
      dispatch(thunkClickSetupPage());
    },
    clickConfigurePage: () => {
      dispatch(thunkClickConfigurePage());
    },
    clickLaunchPage: () => {
      dispatch(thunkClickLaunchPage());
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
