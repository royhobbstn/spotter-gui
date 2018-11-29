//

import {
  actionDeleteProfile,
  actionDeleteProfileInProgress,
  actionLoadProfileData,
  actionResetConfigurePageState,
  actionSetConfigurePageError,
  actionSetProfileDeleteErrorMessage
} from './configure_actions';

export function thunkClickConfigurePage() {
  return async (dispatch, getState) => {
    dispatch(actionResetConfigurePageState());

    let saved_profiles = {};
    let image_list = {};

    try {
      const response = await window.fetch('/configurePage');
      const parsed_response = await response.json();
      [saved_profiles, image_list] = parsed_response.data;

      if (response.status !== 200) {
        throw Error('There was an error calling configurePage');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving configurePage information.');
      console.log(e);
      return dispatch(actionSetConfigurePageError());
    }

    dispatch(actionLoadProfileData(saved_profiles, image_list));
  };
}

export function thunkDeleteProfile(profile_name) {
  return async (dispatch, getState) => {
    const encoded_profile = window.encodeURIComponent(profile_name);
    console.log({ encoded_profile });

    dispatch(actionDeleteProfileInProgress());

    // delete profile on server (only need a 200)
    try {
      const response = await window.fetch(`/deleteProfile?profile=${encoded_profile}`);
      if (response.status !== 200) {
        throw Error(`There was an error deleting profile:${profile_name}`);
      }
    } catch (e) {
      // return information or error state
      console.log(`Error attempting to delete ${profile_name} from server file.`);
      console.log(e);
      return dispatch(actionSetProfileDeleteErrorMessage(e.message));
    }

    // delete on client only if server delete was a success.
    dispatch(actionDeleteProfile(profile_name));
  };
}
