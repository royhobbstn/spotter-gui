import { connect } from 'react-redux';
import { Configure } from './Configure.js';

const mapStateToProps = state => {
  return {
    image_list: state.app_reducer.image_list,
    saved_profiles: state.app_reducer.saved_profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const ConfigureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
