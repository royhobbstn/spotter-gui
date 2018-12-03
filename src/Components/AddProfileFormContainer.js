import { connect } from 'react-redux';
import { AddProfileForm } from './AddProfileForm';

import { thunkAddF1FormProfile } from '../Redux/Configure/configure_thunks';
import {
  actionCancelConfigureForm,
  actionChangeF1ProfileName,
  actionChangeF1AMIImage,
  actionChangeF1MinCpu,
  actionChangeF1MinRAM,
  actionChangeF1MinGPU,
  actionChangeF1ProfileType,
  actionChangeF1ProfileLocation
} from '../Redux/Configure/configure_actions';

import { isF1FormValid } from '../Redux/selectors';

const mapStateToProps = state => {
  return {
    image_list: state.initial_reducer.image_list,
    f1_profile_name: state.configure_reducer.f1_profile_name,
    f1_profile_name_valid: state.configure_reducer.f1_profile_name_valid,
    f1_ami_image: state.configure_reducer.f1_ami_image,
    f1_min_cpu: state.configure_reducer.f1_min_cpu,
    f1_min_ram: state.configure_reducer.f1_min_ram,
    f1_min_gpu: state.configure_reducer.f1_min_gpu,
    f1_profile_type: state.configure_reducer.f1_profile_type,
    f1_profile_location: state.configure_reducer.f1_profile_location,
    isF1FormValid: isF1FormValid(state)
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    cancelF1Form: () => {
      dispatch(actionCancelConfigureForm());
    },
    addF1FormProfile: () => {
      dispatch(thunkAddF1FormProfile());
    },
    changeF1ProfileName: (evt, data) => {
      const valid = data.value !== '';
      dispatch(actionChangeF1ProfileName(data.value, valid));
    },
    changeF1AMIImage: (evt, data) => {
      dispatch(actionChangeF1AMIImage(data.value));
    },
    changeF1MinCpu: (evt, data) => {
      dispatch(actionChangeF1MinCpu(data.value));
    },
    changeF1MinRAM: (evt, data) => {
      dispatch(actionChangeF1MinRAM(data.value));
    },
    changeF1MinGPU: (evt, data) => {
      dispatch(actionChangeF1MinGPU(data.value));
    },
    changeF1ProfileType: (evt, data) => {
      dispatch(actionChangeF1ProfileType(data.value));
    },
    changeF1ProfileLocation: (evt, data) => {
      dispatch(actionChangeF1ProfileLocation(data.value));
    }
  };
};

export const AddProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfileForm);
