//

const form_defaults = {
  add_credentials_form_selected_provider: 'aws',
  add_credentials_form_default_checked: false,
  add_credentials_form_access_key: '',
  add_credentials_form_secret_access_key: '',
  add_credentials_form_label: '',
  add_credentials_form_label_valid: false
};

const default_state = {
  credentials: {},
  show_add_credentials_dialog: false,
  supported_providers: {},
  add_credentials_in_progress: false,
  ...form_defaults
};

export const credentials_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'UPDATE_BASE_DATA':
      return Object.assign({}, state, {
        credentials: action.credentials,
        supported_providers: action.supported_providers
      });
    case 'SHOW_ADD_CREDENTIALS_FORM':
      return Object.assign({}, state, {
        show_add_credentials_dialog: true
      });
    case 'CANCEL_ADD_CREDENTIALS_FORM':
      return Object.assign({}, state, {
        show_add_credentials_dialog: false,
        ...form_defaults
      });
    case 'CHANGE_ADD_CREDENTIALS_FORM_ACCESS_KEY':
      return Object.assign({}, state, {
        add_credentials_form_access_key: action.data
      });
    case 'CHANGE_ADD_CREDENTIALS_FORM_SECRET_ACCESS_KEY':
      return Object.assign({}, state, {
        add_credentials_form_secret_access_key: action.data
      });
    case 'CHANGE_ADD_CREDENTIALS_FORM_LABEL':
      return Object.assign({}, state, {
        add_credentials_form_label: action.data,
        add_credentials_form_label_valid: action.valid
      });
    case 'CHANGE_ADD_CREDENTIALS_FORM_CLOUD_PROVIDER':
      return Object.assign({}, state, {
        add_credentials_form_selected_provider: action.data
      });
    case 'TOGGLE_ADD_CREDENTIALS_FORM_DEFAULT_PROVIDER':
      return Object.assign({}, state, {
        add_credentials_form_default_checked: !state.add_credentials_form_default_checked
      });
    case 'ADD_CREDENTIALS_IN_PROGRESS':
      return Object.assign({}, state, { add_credentials_in_progress: true });
    case 'ADD_CREDENTIAL':
      const new_credential = {
        credentialLabel: action.form_data.add_credentials_form_label,
        isDefault: action.form_data.add_credentials_form_default_checked,
        service: action.form_data.add_credentials_form_selected_provider
      };

      const clear_defaults = new_credential.isDefault
        ? state.credentials.map(c => {
            if (c.service === new_credential.service) {
              return Object.assign({}, c, { isDefault: false });
            } else {
              return c;
            }
          })
        : state.credentials;

      const updated_credentials = [...clear_defaults, new_credential];
      return Object.assign({}, state, {
        credentials: updated_credentials,
        show_add_credentials_dialog: false,
        ...form_defaults
      });
    default:
      return state;
  }
};
