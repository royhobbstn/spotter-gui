//

export function actionClickCredentialsPage() {
  return {
    type: 'CHANGE_PAGE_TO_CREDENTIALS'
  };
}

export function actionShowAddCredentialsForm() {
  return {
    type: 'SHOW_ADD_CREDENTIALS_FORM'
  };
}

export function actionCancelAddCredentialsForm() {
  return {
    type: 'CANCEL_ADD_CREDENTIALS_FORM'
  };
}

export function actionChangeAddCredentialsFormAccessKey(data) {
  return {
    type: 'CHANGE_ADD_CREDENTIALS_FORM_ACCESS_KEY',
    data
  };
}

export function actionChangeAddCredentialsFormSecretAccessKey(data) {
  return {
    type: 'CHANGE_ADD_CREDENTIALS_FORM_SECRET_ACCESS_KEY',
    data
  };
}

export function actionChangeAddCredentialsFormLabel(data, valid) {
  return {
    type: 'CHANGE_ADD_CREDENTIALS_FORM_LABEL',
    data,
    valid
  };
}

export function actionChangeAddCredentialsFormCloudProvider(data) {
  return {
    type: 'CHANGE_ADD_CREDENTIALS_FORM_CLOUD_PROVIDER',
    data
  };
}

export function actionToggleAddCredentialsFormDefaultProvider() {
  return {
    type: 'TOGGLE_ADD_CREDENTIALS_FORM_DEFAULT_PROVIDER'
  };
}

// TODO not implemented
export function actionAddCredentialsInProgress() {
  return {
    type: 'ADD_CREDENTIALS_IN_PROGRESS'
  };
}

// TODO not implemented
export function actionSetAddCredentialsErrorMessage() {
  return {
    type: 'SET_ADD_CREDENTIALS_ERROR_MESSAGE'
  };
}

export function actionAddCredentialsSuccess(form_data) {
  return {
    type: 'ADD_CREDENTIAL',
    form_data
  };
}

export function actionEditCredential(credential) {
  return {
    type: 'EDIT_CREDENTIAL',
    credential
  };
}
