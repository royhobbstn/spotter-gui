//

import {
  actionInstanceDataError,
  actionInstanceDataLoading,
  actionloadInstanceData
} from './status_actions';

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
