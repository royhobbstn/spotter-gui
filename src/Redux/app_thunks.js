//

import {
  resetSetupPageState,
  setSetupPageError,
  setSetupPageContent,
  resetConfigurePageState,
  setConfigurePageError,
  setConfigurePageContent,
  resetLaunchPageState,
  setLaunchPageError,
  setLaunchPageContent,
  resetStatusPageState,
  setStatusPageError,
  setStatusPageContent
} from './app_actions';

export function thunkClickSetupPage() {
  return async (dispatch, getState) => {
    dispatch(resetSetupPageState());

    let setup_info = {};

    try {
      const response = await window.fetch('/setupPage');
      setup_info = await response.json();
      if (response.status !== 200) {
        throw Error((setup_info && setup_info.error) || 'There was an error calling setupPage');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving setupPage information.');
      console.log(e);
      return dispatch(setSetupPageError());
    }

    dispatch(setSetupPageContent(setup_info));
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

export function thunkClickStatusPage() {
  return async (dispatch, getState) => {
    dispatch(resetStatusPageState());

    let status_info = {};

    try {
      const response = await window.fetch('/statusPage');
      status_info = await response.json();
      if (response.status !== 200) {
        throw Error((status_info && status_info.error) || 'There was an error calling launchPage');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving statusPage information.');
      console.log(e);
      return dispatch(setStatusPageError());
    }

    dispatch(setStatusPageContent(status_info));
  };
}
