//

export function actionUpdateBaseData(
  credential_profiles,
  image_list,
  saved_profiles,
  selected_profiles
) {
  return {
    type: 'UPDATE_BASE_DATA',
    credential_profiles,
    image_list,
    saved_profiles,
    selected_profiles
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
