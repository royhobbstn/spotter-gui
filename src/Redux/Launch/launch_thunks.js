//

import {
  actionResetLaunchPageState,
  actionSetLaunchPageContent,
  actionSetLaunchPageError
} from './launch_actions';

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
