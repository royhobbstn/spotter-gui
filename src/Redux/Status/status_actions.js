//

export function actionInstanceDataLoading() {
  return {
    type: 'INSTANCE_DATA_LOADING'
  };
}

export function actionInstanceDataError() {
  return {
    type: 'INSTANCE_DATA_ERROR'
  };
}

export function actionloadInstanceData(instance_data) {
  return {
    type: 'LOAD_INSTANCE_DATA',
    instance_data
  };
}
