import { connect } from 'react-redux';
import { Images } from './Images.js';

const mapStateToProps = state => {
  return {
    image_list: state.images_reducer.image_list
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const ImagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
