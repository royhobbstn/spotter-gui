
import { connect } from 'react-redux';
import { TopMenu } from './TopMenu.js';

import { actionUpdateActiveMenuItem } from '../Redux/app_actions';

const mapStateToProps = state => {
  return {
    active_menu_item: state.app_reducer.active_menu_item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveMenuItem: item => {
      dispatch(actionUpdateActiveMenuItem(item));
    }
  };
};

export const TopMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TopMenu);
