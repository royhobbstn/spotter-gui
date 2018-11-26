// setupPage

export function resetSetupPageState() {
  return {
    type: 'RESET_SETUP_PAGE'
  };
}

export function setSetupPageError(error) {
  return {
    type: 'DISPLAY_SETUP_PAGE_ERROR',
    error
  };
}

export function updateAvailableProfiles(profiles, selected_profiles) {
  return {
    type: 'UPDATE_AVAILABLE_CREDENTIAL_PROFILES',
    profiles,
    selected_profiles
  };
}

// configurePage

export function resetConfigurePageState() {
  return {
    type: 'RESET_CONFIGURE_PAGE'
  };
}

export function setConfigurePageError(error) {
  return {
    type: 'DISPLAY_CONFIGURE_PAGE_ERROR',
    error
  };
}

export function loadProfileData(saved_profiles, image_list) {
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

// launchPage

export function actionUpdateSelectedLaunchProfile(profile) {
  return {
    type: 'UPDATE_SELECTED_LAUNCH_PROFILE',
    profile
  };
}

export function actionToggleServiceCheckbox(service) {
  return {
    type: 'TOGGLE_SERVICE_CHECKBOX',
    service
  };
}

export function resetLaunchPageState() {
  return {
    type: 'RESET_LAUNCH_PAGE'
  };
}

export function setLaunchPageError(error) {
  return {
    type: 'DISPLAY_LAUNCH_PAGE_ERROR',
    error
  };
}

export function setLaunchPageContent(content) {
  return {
    type: 'DISPLAY_LAUNCH_PAGE_CONTENT',
    content
  };
}

// status

export function instanceDataLoading() {
  return {
    type: 'INSTANCE_DATA_LOADING'
  };
}

export function instanceDataError() {
  return {
    type: 'INSTANCE_DATA_ERROR'
  };
}

export function loadInstanceData(instance_data) {
  return {
    type: 'LOAD_INSTANCE_DATA',
    instance_data
  };
}
