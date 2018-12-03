import { connect } from 'react-redux';
import { Status } from './Status.js';

const mapStateToProps = state => {
  return {
    instance_data: state.status_reducer.instance_data,
    launch_profiles: state.initial_reducer.launch_profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    launchInstance: () => {
      console.log('Launch Button Clicked');
    }
  };
};

export const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);
