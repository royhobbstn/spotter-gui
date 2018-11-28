export function actionResetConfigurePageState() {
  return {
    type: 'RESET_CONFIGURE_PAGE'
  };
}

export function actionSetConfigurePageError(error) {
  return {
    type: 'DISPLAY_CONFIGURE_PAGE_ERROR',
    error
  };
}

export function actionLoadProfileData(saved_profiles, image_list) {
  return {
    type: 'LOAD_PROFILE_DATA',
    saved_profiles,
    image_list
  };
}

export function actionDeleteProfileInProgress() {
  return {
    type: 'DELETE_PROFILE_IN_PROGRESS'
  };
}

export function actionSetProfileDeleteErrorMessage() {
  return {
    type: 'SET_DELETE_ERROR_MESSAGE' // TODO (not implemented)
  };
}

export function actionDeleteProfile(profile) {
  return {
    type: 'DELETE_PROFILE', // TODO (not implemented)
    profile
  };
}

export function actionShowAddProfileDialog() {
  return {
    type: 'SHOW_ADD_PROFILE_DIALOG'
  };
}

export function actionCancelConfigureForm() {
  return {
    type: 'CANCEL_CONFIGURE_FORM'
  };
}
