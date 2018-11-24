import { connect } from 'react-redux';
import { App } from './App.js';

const mapStateToProps = state => {
  return {
    active_menu_item: state.app_reducer.active_menu_item
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
