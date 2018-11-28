export function actionResetSetupPageState() {
  return {
    type: 'RESET_SETUP_PAGE'
  };
}

export function actionSetupPageError(error) {
  return {
    type: 'DISPLAY_SETUP_PAGE_ERROR',
    error
  };
}

export function actionUpdateAvailableProfiles(profiles, selected_profiles) {
  return {
    type: 'UPDATE_AVAILABLE_CREDENTIAL_PROFILES',
    profiles,
    selected_profiles
  };
}
