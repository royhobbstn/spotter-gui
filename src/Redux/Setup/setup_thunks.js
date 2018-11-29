//

import {
  actionResetSetupPageState,
  actionSetupPageError,
  actionUpdateAvailableProfiles
} from './setup_actions';

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
