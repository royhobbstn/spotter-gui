//

export function actionUpdateBaseData(credentials, image_list, launch_profiles) {
  return {
    type: 'UPDATE_BASE_DATA',
    credentials,
    image_list,
    launch_profiles
  };
}

export function actionInitialDataLoading() {
  return {
    type: ''
  };
}

export function actionUpdateBaseDataError() {
  return {
    type: ''
  };
}
