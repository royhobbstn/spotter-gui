import { createSelector } from 'reselect';

const getF1ProfileNameValid = state => state.profile_reducer.f1_profile_name_valid;
const getAddCredentialsFormLabelValid = state =>
  state.credentials_reducer.add_credentials_form_label_valid;

export const isF1FormValid = createSelector(
  [getF1ProfileNameValid],
  f1_profile_name_valid => {
    return f1_profile_name_valid;
  }
);

export const isAddCredentialsFormValid = createSelector(
  [getAddCredentialsFormLabelValid],
  label_valid => {
    return label_valid;
  }
);
