import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GreetingDarkIcon from '../../assets/images/greeting-dark-icon.svg';
import GreetingLightIcon from '../../assets/images/greeting-light-icon.svg';

const Greeting = (props) => {
  const {theme} = props;

  return (
    <section className="greeting">
      <div className="greeting__info">
        <h2 className="greeting__title">Awesome to do</h2>
        <p className="greeting__description">Ваш личный помощник<br /> в организации списка задач</p>
      </div>
      {
        theme === `dark` ?
          <GreetingDarkIcon
            className="greeting__image greeting__image--dark"
            width="537"
            height="478"
          /> :
          <GreetingLightIcon
            className="greeting__image greeting__image--light"
            width="537"
            height="478"
          />
      }
    </section>
  );
};

Greeting.propTypes = {
  theme: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps, null)(Greeting);