import { createSelector } from 'reselect';

const getF1ProfileNameValid = state => state.configure_reducer.f1_profile_name_valid;

export const isF1FormValid = createSelector(
  [getF1ProfileNameValid],
  f1_profile_name_valid => {
    return f1_profile_name_valid;
  }
);
