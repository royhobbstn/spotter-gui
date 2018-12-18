import { connect } from 'react-redux';
import { AddCredentialsForm } from './AddCredentialsForm';

import {
  actionCancelAddCredentialsForm,
  actionChangeAddCredentialsFormAccessKey,
  actionChangeAddCredentialsFormSecretAccessKey,
  actionChangeAddCredentialsFormLabel,
  actionChangeAddCredentialsFormCloudProvider,
  actionToggleAddCredentialsFormDefaultProvider
} from '../Redux/Credentials/credentials_actions';

import { thunkAddCredentials } from '../Redux/Credentials/credentials_thunks';

import { isAddCredentialsFormValid } from '../Redux/selectors';

const mapStateToProps = state => {
  return {
    add_credentials_in_progress: state.credentials_reducer.add_credentials_in_progress,
    supported_providers: state.credentials_reducer.supported_providers,
    add_credentials_form_selected_provider:
      state.credentials_reducer.add_credentials_form_selected_provider,
    add_credentials_form_default_checked:
      state.credentials_reducer.add_credentials_form_default_checked,
    add_credentials_form_access_key: state.credentials_reducer.add_credentials_form_access_key,
    add_credentials_form_secret_access_key:
      state.credentials_reducer.add_credentials_form_secret_access_key,
    add_credentials_form_label: state.credentials_reducer.add_credentials_form_label,
    add_credentials_form_label_valid: state.credentials_reducer.add_credentials_form_label_valid,
    isAddCredentialsFormValid: isAddCredentialsFormValid(state)
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    addCredentials: () => {
      dispatch(thunkAddCredentials());
    },
    cancelCredentialsForm: () => {
      dispatch(actionCancelAddCredentialsForm());
    },
    changeAddCredentialsFormAccessKey: (evt, data) => {
      dispatch(actionChangeAddCredentialsFormAccessKey(data.value));
    },
    changeAddCredentialsFormSecretAccessKey: (evt, data) => {
      dispatch(actionChangeAddCredentialsFormSecretAccessKey(data.value));
    },
    changeAddCredentialsFormLabel: (evt, data) => {
      const valid = data.value !== '';
      dispatch(actionChangeAddCredentialsFormLabel(data.value, valid));
    },
    changeAddCredentialsFormCloudProvider: (evt, data) => {
      dispatch(actionChangeAddCredentialsFormCloudProvider(data.value));
    },
    toggleAddCredentialsFormDefaultProvider: (evt, data) => {
      dispatch(actionToggleAddCredentialsFormDefaultProvider());
    }
  };
};

export const AddCredentialsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCredentialsForm);
