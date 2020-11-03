import React from 'react';
import GreetingDarkIcon from '../../assets/images/greeting-dark-icon.svg';
import GreetingLightIcon from '../../assets/images/greeting-light-icon.svg';

const Greeting = () => {
  return (
    <section className="greeting">
      <div className="greeting__info">
        <h2 className="greeting__title">Awesome to do</h2>
        <p className="greeting__description">Ваш личный помощник<br /> в организации списка задач</p>
      </div>
      <GreetingDarkIcon className="greeting__image greeting__image--dark" width="537" height="478" />
      <GreetingLightIcon className="greeting__image greeting__image--light" width="537" height="478" />
    </section>
  );
};

export default Greeting;
