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

export function actionSetF1FormAddErrorMessage() {
  return {
    type: 'F1_FORM_ADD_PROFILE_ERROR' // TODO (not implemented)
  };
}

export function actionDeleteProfile(profile) {
  return {
    type: 'DELETE_PROFILE', // TODO (not implemented)
    profile
  };
}

export function actionSetF1FormAddInProgress() {
  return {
    type: 'F1_FORM_ADD_IN_PROGRESS'
  };
}

export function actionShowAddProfileDialog(data) {
  return {
    type: 'SHOW_ADD_PROFILE_DIALOG',
    data
  };
}

export function actionCancelConfigureForm(data) {
  return {
    type: 'CANCEL_CONFIGURE_FORM',
    data
  };
}

export function actionChangeF1ProfileName(data) {
  return {
    type: 'CHANGE_F1_PROFILE_NAME',
    data
  };
}

export function actionChangeF1AMIImage(data) {
  return {
    type: 'CHANGE_F1_AMI_IMAGE',
    data
  };
}

export function actionChangeF1MinCpu(data) {
  return {
    type: 'CHANGE_F1_MIN_CPU',
    data
  };
}

export function actionChangeF1MinRAM(data) {
  return {
    type: 'CHANGE_F1_MIN_RAM',
    data
  };
}

export function actionChangeF1MinGPU(data) {
  return {
    type: 'CHANGE_F1_MIN_GPU',
    data
  };
}

export function actionChangeF1ProfileType(data) {
  return {
    type: 'CHANGE_F1_PROFILE_TYPE',
    data
  };
}

export function actionChangeF1ProfileLocation(data) {
  return {
    type: 'CHANGE_F1_PROFILE_LOCATION',
    data
  };
}

export function actionAddF1Profile(data) {
  return {
    type: 'ADD_F1_PROFILE',
    data
  };
}
