import { connect } from 'react-redux';
import { Credentials } from './Credentials.js';
import {
  actionShowAddCredentialsForm,
  actionEditCredential
} from '../Redux/Credentials/credentials_actions';

const mapStateToProps = state => {
  return {
    credentials: state.credentials_reducer.credentials,
    show_add_credentials_dialog: state.credentials_reducer.show_add_credentials_dialog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAddCredentialsForm: () => {
      dispatch(actionShowAddCredentialsForm());
    },
    editCredentials: credential => {
      dispatch(actionEditCredential(credential));
    }
  };
};

export const CredentialsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credentials);
