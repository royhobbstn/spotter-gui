//
import {
  actionResetConfigurePageState,
  actionSetConfigurePageError,
  actionLoadProfileData,
  actionDeleteProfileInProgress,
  actionSetProfileDeleteErrorMessage,
  actionDeleteProfile
} from './Configure/configure_actions';

import {
  actionInstanceDataLoading,
  actionInstanceDataError,
  actionloadInstanceData
} from './Status/status_actions';

import {
  actionResetSetupPageState,
  actionSetupPageError,
  actionUpdateAvailableProfiles
} from './Setup/setup_actions';

import {
  actionResetLaunchPageState,
  actionSetLaunchPageError,
  actionSetLaunchPageContent
} from './Launch/launch_actions';

export function thunkGetInstanceData() {
  return async (dispatch, getState) => {
    dispatch(actionInstanceDataLoading());

    let instance_data = {};

    try {
      const response = await window.fetch('/loadInstanceData');
      instance_data = await response.json();

      if (response.status !== 200) {
        throw Error('There was an error calling loadInstanceData');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving instanceData information.');
      console.log(e);
      return dispatch(actionInstanceDataError());
    }
    dispatch(actionloadInstanceData(instance_data));
  };
}

export function thunkClickSetupPage() {
  return async (dispatch, getState) => {
    dispatch(actionResetSetupPageState());

    let available_profiles = {};

    try {
      const response = await window.fetch('/setupPage');
      available_profiles = await response.json();
      if (response.status !== 200) {
        throw Error('There was an error calling setupPage');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving setupPage information.');
      console.log(e);
      return dispatch(actionSetupPageError());
    }
    const [profiles, selected_profiles] = available_profiles;
    dispatch(actionUpdateAvailableProfiles(profiles, selected_profiles));
  };
}

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

export function thunkClickLaunchPage() {
  return async (dispatch, getState) => {
    dispatch(actionResetLaunchPageState());

    let launch_info = {};

    try {
      const response = await window.fetch('/launchPage');
      launch_info = await response.json();
      if (response.status !== 200) {
        throw Error((launch_info && launch_info.error) || 'There was an error calling launchPage');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving launchPage information.');
      console.log(e);
      return dispatch(actionSetLaunchPageError());
    }

    dispatch(actionSetLaunchPageContent(launch_info));
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
