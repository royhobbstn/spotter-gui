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
    let credential_profiles;
    let image_list;
    let saved_profiles;
    let selected_profiles;

    try {
      const response = await window.fetch('/loadInitialData');
      initial_data = await response.json();
      credential_profiles = initial_data.credential_profiles;
      image_list = initial_data.image_list;
      saved_profiles = initial_data.saved_profiles;
      selected_profiles = initial_data.selected_profiles;

      if (response.status !== 200) {
        throw Error('There was an error calling loadInitialData');
      }
    } catch (e) {
      // return information or error state
      console.log('Error retrieving initialData information.');
      console.log(e);
      return dispatch(actionUpdateBaseDataError());
    }

    dispatch(
      actionUpdateBaseData(credential_profiles, image_list, saved_profiles, selected_profiles)
    );
  };
}
