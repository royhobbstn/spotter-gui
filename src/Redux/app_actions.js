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

export function setSetupPageContent(response) {
  return {
    type: 'DISPLAY_SETUP_PAGE_CONTENT',
    credentials: response.credentials
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

// statusPage

export function resetStatusPageState() {
  return {
    type: 'RESET_STATUS_PAGE'
  };
}

export function setStatusPageError(error) {
  return {
    type: 'DISPLAY_STATUS_PAGE_ERROR',
    error
  };
}

export function setStatusPageContent(content) {
  return {
    type: 'DISPLAY_STATUS_PAGE_CONTENT',
    content
  };
}

// general

export function appLoading() {
  return {
    type: 'APP_LOADING'
  };
}

export function appError() {
  return {
    type: 'APP_ERROR'
  };
}

export function loadInstanceList(instances) {
  return {
    type: 'UPDATE_INSTANCE_LIST',
    instances
  };
}

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
