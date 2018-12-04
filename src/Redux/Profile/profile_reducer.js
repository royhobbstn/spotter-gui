//

const default_form_state = {
  f1_profile_name: '',
  f1_ami_image: 'Ubuntu-16.04',
  f1_min_cpu: 0,
  f1_min_ram: 0,
  f1_min_gpu: 0,
  f1_profile_type: 'git',
  f1_profile_location: '',
  f1_copy_local_files: [],
  f1_profile_name_valid: false
};

const default_state = {
  launch_profiles: {}, // load from JSON
  //
  profile_page_status: '',
  delete_profile_in_progress: '', // name of profile being deleted
  add_profile_in_progress: false,
  show_add_profile_dialog: false,
  ...default_form_state
};

export const profile_reducer = (state = default_state, action) => {
  switch (action.type) {
    //
    case 'UPDATE_BASE_DATA':
      return Object.assign({}, state, {
        launch_profiles: action.launch_profiles
      });

    //
    case 'ADD_F1_PROFILE':
      const updated_profiles = { profiles: [...state.launch_profiles.profiles, action.data] };
      return Object.assign({}, state, {
        launch_profiles: updated_profiles,
        ...default_form_state,
        show_add_profile_dialog: false
      });

    case 'F1_FORM_ADD_IN_PROGRESS':
      return Object.assign({}, state, { add_profile_in_progress: true });
    case 'CHANGE_F1_PROFILE_NAME':
      return Object.assign({}, state, {
        f1_profile_name: action.data,
        f1_profile_name_valid: action.valid
      });
    case 'CHANGE_F1_AMI_IMAGE':
      return Object.assign({}, state, { f1_ami_image: action.data });
    case 'CHANGE_F1_MIN_CPU':
      return Object.assign({}, state, { f1_min_cpu: action.data });
    case 'CHANGE_F1_MIN_RAM':
      return Object.assign({}, state, { f1_min_ram: action.data });
    case 'CHANGE_F1_MIN_GPU':
      return Object.assign({}, state, { f1_min_gpu: action.data });
    case 'CHANGE_F1_PROFILE_TYPE':
      return Object.assign({}, state, { f1_profile_type: action.data });
    case 'CHANGE_F1_PROFILE_LOCATION':
      return Object.assign({}, state, { f1_profile_location: action.data });

    case 'CANCEL_PROFILE_FORM':
      return Object.assign({}, state, {
        ...default_form_state,
        show_add_profile_dialog: false
      });

    case 'RESET_PROFILE_PAGE':
      return Object.assign({}, state, {
        profile_page_status: 'loading'
      });

    case 'DELETE_PROFILE_IN_PROGRESS':
      return Object.assign({}, state, {
        delete_profile_in_progress: action.profile
      });

    case 'DELETE_PROFILE':
      const profile_copy = {
        profiles: [
          ...state.launch_profiles.profiles.filter(p => {
            return p.profileLabel !== action.profile;
          })
        ]
      };
      return Object.assign({}, state, {
        launch_profiles: profile_copy,
        delete_profile_in_progress: ''
      });

    case 'SHOW_ADD_PROFILE_DIALOG':
      return Object.assign({}, state, {
        show_add_profile_dialog: true
      });

    default:
      return state;
  }
};
