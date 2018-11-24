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

export function setSetupPageContent(content) {
  return {
    type: 'DISPLAY_SETUP_PAGE_CONTENT',
    content
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
