//

import {
  resetSetupPageState,
  setSetupPageError,
  updateAvailableProfiles,
  resetConfigurePageState,
  setConfigurePageError,
  setConfigurePageContent,
  resetLaunchPageState,
  setLaunchPageError,
  setLaunchPageContent,
  instanceDataLoading,
  instanceDataError,
  loadInstanceData
} from './app_actions';

export function thunkGetInstanceData() {
  return async (dispatch, getState) => {
    dispatch(instanceDataLoading());

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
      return dispatch(instanceDataError());
    }
    dispatch(loadInstanceData(instance_data));
  };
}

export function thunkClickSetupPage() {
  return async (dispatch, getState) => {
    dispatch(resetSetupPageState());

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
      return dispatch(setSetupPageError());
    }
    const [profiles, selected_profiles] = available_profiles;
    dispatch(updateAvailableProfiles(profiles, selected_profiles));
  };
}

export function thunkClickConfigurePage() {
  return async (dispatch, getState) => {
    dispatch(resetConfigurePageState());

    let configure_info = {};

    try {
      const response = await window.fetch('/configurePage');
      configure_info = await response.json();
      if (response.status !== 200) {
        throw Error(
          (configure_info && configure_info.error) || 'There was an error calling configurePage'
        );
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving configurePage information.');
      console.log(e);
      return dispatch(setConfigurePageError());
    }

    dispatch(setConfigurePageContent(configure_info));
  };
}

export function thunkClickLaunchPage() {
  return async (dispatch, getState) => {
    dispatch(resetLaunchPageState());

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
      return dispatch(setLaunchPageError());
    }

    dispatch(setLaunchPageContent(launch_info));
  };
}
