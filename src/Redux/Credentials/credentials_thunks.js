// thunkAddCredentials

import {
  actionAddCredentialsInProgress,
  actionSetAddCredentialsErrorMessage,
  actionAddCredentialsSuccess
} from '../Credentials/credentials_actions';

import { postData } from '../../Utility/http';

export function thunkAddCredentials(profile_name) {
  return async (dispatch, getState) => {
    const form_state = getState();

    const form_information = {
      add_credentials_form_selected_provider:
        form_state.credentials_reducer.add_credentials_form_selected_provider,
      add_credentials_form_default_checked:
        form_state.credentials_reducer.add_credentials_form_default_checked,
      add_credentials_form_access_key:
        form_state.credentials_reducer.add_credentials_form_access_key,
      add_credentials_form_secret_access_key:
        form_state.credentials_reducer.add_credentials_form_secret_access_key,
      add_credentials_form_label: form_state.credentials_reducer.add_credentials_form_label
    };

    dispatch(actionAddCredentialsInProgress(profile_name));

    try {
      const response = await postData(`/Credentials`, form_information);
      if (response.status !== 200) {
        throw Error(`There was an error adding new Credentials.`);
      }
    } catch (e) {
      // return information or error state
      console.log(`Error attempting to add Credentials to server file.`);
      console.log(e);
      return dispatch(actionSetAddCredentialsErrorMessage(e.message));
    }

    // return success message, add credentials to local store
    dispatch(actionAddCredentialsSuccess(form_information));
  };
}
