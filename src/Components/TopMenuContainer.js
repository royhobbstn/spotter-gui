import { connect } from 'react-redux';
import { TopMenu } from './TopMenu.js';

import { thunkGetInstanceData } from '../Redux/Status/status_thunks';
import { actionClickProfilePage } from '../Redux/Profile/profile_actions';
import { actionClickCredentialsPage } from '../Redux/Credentials/credentials_actions';
import { actionClickImagesPage } from '../Redux/Images/images_actions';

const mapStateToProps = state => {
  return {
    active_menu_item: state.initial_reducer.active_menu_item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickCredentialsPage: () => {
      dispatch(actionClickCredentialsPage());
    },
    clickProfilePage: () => {
      dispatch(actionClickProfilePage());
    },
    clickStatusPage: () => {
      dispatch(thunkGetInstanceData());
    },
    clickImagesPage: () => {
      dispatch(actionClickImagesPage());
    }
  };
};

export const TopMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
