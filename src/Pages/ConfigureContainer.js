import { connect } from 'react-redux';
import { Configure } from './Configure.js';

import { thunkDeleteProfile, thunkAddF1FormProfile } from '../Redux/Configure/configure_thunks';
import {
  actionShowAddProfileDialog,
  actionCancelConfigureForm,
  actionChangeF1ProfileName,
  actionChangeF1AMIImage,
  actionChangeF1MinCpu,
  actionChangeF1MinRAM,
  actionChangeF1MinGPU,
  actionChangeF1ProfileType,
  actionChangeF1ProfileLocation
} from '../Redux/Configure/configure_actions';

const mapStateToProps = state => {
  return {
    image_list: state.initial_reducer.image_list,
    saved_profiles: state.initial_reducer.saved_profiles,
    delete_profile_in_progress: state.configure_reducer.delete_profile_in_progress,
    show_add_profile_dialog: state.configure_reducer.show_add_profile_dialog,
    f1_profile_name: state.configure_reducer.f1_profile_name,
    f1_ami_image: state.configure_reducer.f1_ami_image,
    f1_min_cpu: state.configure_reducer.f1_min_cpu,
    f1_min_ram: state.configure_reducer.f1_min_ram,
    f1_min_gpu: state.configure_reducer.f1_min_gpu,
    f1_profile_type: state.configure_reducer.f1_profile_type,
    f1_profile_location: state.configure_reducer.f1_profile_location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProfile: profile_name => {
      dispatch(thunkDeleteProfile(profile_name));
    },
    showAddProfileDialog: () => {
      dispatch(actionShowAddProfileDialog());
    },
    cancelF1Form: () => {
      dispatch(actionCancelConfigureForm());
    },
    addF1FormProfile: () => {
      dispatch(thunkAddF1FormProfile());
    },
    changeF1ProfileName: (evt, data) => {
      dispatch(actionChangeF1ProfileName(data.value));
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

export const ConfigureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Configure);
