//

const default_state = {
  configure_page_status: '',
  delete_profile_in_progress: '', // name of profile being deleted
  add_profile_in_progress: false,
  show_add_profile_dialog: false,
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

const configure_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'ADD_F1_PROFILE':
      return Object.assign({}, state, {
        f1_profile_name: '',
        f1_ami_image: 'Ubuntu-16.04',
        f1_min_cpu: 0,
        f1_min_ram: 0,
        f1_min_gpu: 0,
        f1_profile_type: 'git',
        f1_profile_location: '',
        f1_copy_local_files: [],
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

    case 'CANCEL_CONFIGURE_FORM':
      return Object.assign({}, state, {
        show_add_profile_dialog: false
      });

    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        configure_page_status: 'loading'
      });
    case 'DISPLAY_CONFIGURE_PAGE_ERROR':
      return Object.assign({}, state, {
        configure_page_status: 'error'
      });
    case 'LOAD_PROFILE_DATA':
      return Object.assign({}, state, {
        configure_page_status: 'content',
        saved_profiles: action.saved_profiles,
        image_list: action.image_list
      });
    case 'DELETE_PROFILE_IN_PROGRESS':
      return Object.assign({}, state, {
        delete_profile_in_progress: action.profile
      });
    case 'DELETE_PROFILE':
      return Object.assign({}, state, {
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

export default configure_reducer;
