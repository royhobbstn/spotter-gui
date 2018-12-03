import { connect } from 'react-redux';
import { Setup } from './Setup.js';

const mapStateToProps = state => {
  return {
    credentials: state.initial_reducer.credentials
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const SetupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
