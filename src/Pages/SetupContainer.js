import { connect } from 'react-redux';
import { Setup } from './Setup.js';

const mapStateToProps = state => {
  return {
    setup_page_credentials: state.app_reducer.setup_page_credentials,
    setup_page_status: state.app_reducer.setup_page_status
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
