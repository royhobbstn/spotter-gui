//

export function actionUpdateBaseData(
  credentials,
  image_list,
  launch_profiles,
  supported_providers
) {
  return {
    type: 'UPDATE_BASE_DATA',
    credentials,
    image_list,
    launch_profiles,
    supported_providers
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
