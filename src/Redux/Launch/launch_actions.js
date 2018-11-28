//

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

export function actionResetLaunchPageState() {
  return {
    type: 'RESET_LAUNCH_PAGE'
  };
}

export function actionSetLaunchPageError(error) {
  return {
    type: 'DISPLAY_LAUNCH_PAGE_ERROR',
    error
  };
}

export function actionSetLaunchPageContent(content) {
  return {
    type: 'DISPLAY_LAUNCH_PAGE_CONTENT',
    content
  };
}
