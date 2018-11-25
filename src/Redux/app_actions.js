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

export function setConfigurePageContent(content) {
  return {
    type: 'DISPLAY_CONFIGURE_PAGE_CONTENT',
    content
  };
}

// launchPage

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
