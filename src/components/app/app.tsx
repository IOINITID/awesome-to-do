import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';

interface IApp {
  theme: string;
  isModalOpen: boolean;
}

const App = (props: IApp) => {
  const {theme, isModalOpen} = props;

  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Main />
      {isModalOpen && <Modal />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, null)(App);
