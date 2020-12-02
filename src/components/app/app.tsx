import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';

const App = (props) => {
  const {theme, isModalOpen} = props;

  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Main />
      {isModalOpen && <Modal />}
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, null)(App);