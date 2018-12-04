import { connect } from 'react-redux';
import { Credentials } from './Credentials.js';

const mapStateToProps = state => {
  return {
    credentials: state.credentials_reducer.credentials
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const CredentialsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credentials);
