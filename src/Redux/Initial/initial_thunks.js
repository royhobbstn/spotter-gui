//

import {
  actionUpdateBaseData,
  actionInitialDataLoading,
  actionUpdateBaseDataError
} from '../Initial/initial_actions';

export function loadAllInitialData() {
  return async (dispatch, getState) => {
    dispatch(actionInitialDataLoading());

    let initial_data = {};
    let credentials;
    let image_list;
    let launch_profiles;
    let supported_providers;

    try {
      const response = await window.fetch('/loadInitialData');
      initial_data = await response.json();
      credentials = initial_data.credentials;
      image_list = initial_data.image_list;
      launch_profiles = initial_data.launch_profiles;
      supported_providers = initial_data.supported_providers;

      if (response.status !== 200) {
        throw Error('There was an error calling loadInitialData');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving initialData information.');
      console.log(e);
      return dispatch(actionUpdateBaseDataError());
    }

    dispatch(actionUpdateBaseData(credentials, image_list, launch_profiles, supported_providers));
  };
}
