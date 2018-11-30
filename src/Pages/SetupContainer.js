import { connect } from 'react-redux';
import { Setup } from './Setup.js';

const mapStateToProps = state => {
  return {
    setup_page_status: state.setup_reducer.setup_page_status,
    selected_profiles: state.initial_reducer.selected_profiles,
    all_profiles: state.initial_reducer.all_profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
