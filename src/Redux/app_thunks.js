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
      if (setup_info.error) {
        throw setup_info.error;
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

    let setup_info = {};

    try {
      const response = await window.fetch('/configurePage');
      setup_info = await response.json();
      if (setup_info.error) {
        throw setup_info.error;
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving configurePage information.');
      console.log(e);
      return dispatch(setConfigurePageError());
    }

    dispatch(setConfigurePageContent(setup_info));
  };
}

export function thunkClickLaunchPage() {
  return async (dispatch, getState) => {
    dispatch(resetLaunchPageState());

    let setup_info = {};

    try {
      const response = await window.fetch('/launchPage');
      setup_info = await response.json();
      if (setup_info.error) {
        throw setup_info.error;
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving launchPage information.');
      console.log(e);
      return dispatch(setLaunchPageError());
    }

    dispatch(setLaunchPageContent(setup_info));
  };
}

export function thunkClickStatusPage() {
  return async (dispatch, getState) => {
    dispatch(resetStatusPageState());

    let setup_info = {};

    try {
      const response = await window.fetch('/statusPage');
      setup_info = await response.json();
      if (setup_info.error) {
        throw setup_info.error;
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving statusPage information.');
      console.log(e);
      return dispatch(setStatusPageError());
    }

    dispatch(setStatusPageContent(setup_info));
  };
}
