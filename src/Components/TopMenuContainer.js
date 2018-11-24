import { connect } from 'react-redux';
import { TopMenu } from './TopMenu.js';

import {
  thunkClickSetupPage,
  thunkClickConfigurePage,
  thunkClickLaunchPage,
  thunkClickStatusPage
} from '../Redux/app_thunks';

const mapStateToProps = state => {
  return {
    active_menu_item: state.app_reducer.active_menu_item
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
      dispatch(thunkClickStatusPage());
    }
  };
};

export const TopMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
