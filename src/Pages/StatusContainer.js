import { connect } from 'react-redux';
import { Status } from './Status.js';

const mapStateToProps = state => {
  return { instance_data: state.status_reducer.instance_data };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);
