//

import {
  actionDeleteProfile,
  actionDeleteProfileInProgress,
  actionLoadProfileData,
  actionResetConfigurePageState,
  actionSetConfigurePageError,
  actionSetProfileDeleteErrorMessage,
  actionSetF1FormAddErrorMessage,
  actionSetF1FormAddInProgress,
  actionAddF1Profile
} from './configure_actions';

import { postData, deleteData } from '../../Utility/http';

export function thunkClickConfigurePage() {
  return async (dispatch, getState) => {
    // dispatch(actionResetConfigurePageState());
    //
    // let saved_profiles = {};
    // let image_list = {};
    //
    // try {
    //   const response = await window.fetch('/configurePage');
    //   const parsed_response = await response.json();
    //   [saved_profiles, image_list] = parsed_response.data;
    //
    //   if (response.status !== 200) {
    //     throw Error('There was an error calling configurePage');
    //   }
    // } catch (e) {
    //   // return information or error state
    //   console.log('Error retrieving configurePage information.');
    //   console.log(e);
    return dispatch(actionSetConfigurePageError());
    // }
    //
    // dispatch(actionLoadProfileData(saved_profiles, image_list));
  };
}

export function thunkDeleteProfile(profile_name) {
  return async (dispatch, getState) => {
    const encoded_profile = window.encodeURIComponent(profile_name);
    dispatch(actionDeleteProfileInProgress(profile_name));

    // delete profile on server (only need a 200)
    try {
      const response = await deleteData(`/Profile/${encoded_profile}`);
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

export function thunkAddF1FormProfile() {
  return async (dispatch, getState) => {
    const form_state = getState();

    const form_information = {
      profileLabel: form_state.configure_reducer.f1_profile_name,
      imageName: form_state.configure_reducer.f1_ami_image,
      minCpu: form_state.configure_reducer.f1_min_cpu,
      minRam: form_state.configure_reducer.f1_min_ram,
      minGpu: form_state.configure_reducer.f1_min_gpu,
      type: form_state.configure_reducer.f1_profile_type,
      location: form_state.configure_reducer.f1_profile_location,
      copyLocalFiles: form_state.configure_reducer.f1_copy_local_files
    };

    dispatch(actionSetF1FormAddInProgress());

    // add profile on server (only need a 200)
    try {
      const response = await postData(`/Profile`, form_information);
      if (response.status !== 200) {
        throw Error(`There was an error adding the profile`);
      }
    } catch (e) {
      // return information or error state
      console.log(`Error attempting to add a profile to the server file.`);
      console.log(e);
      return dispatch(actionSetF1FormAddErrorMessage(e.message));
    }

    // add on client only if server delete was a success.
    dispatch(actionAddF1Profile(form_information));
  };
}
