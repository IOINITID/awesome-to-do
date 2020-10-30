import React from 'react';
import Icon from '../icon/icon.jsx';

const Logo = () => {
  const iconData = {
    className: `logo`,
    name: `logo`,
    width: 92,
    height: 65
  };

  return (
    <a className="logo" href="#">
      <Icon iconData={iconData} />
    </a>
  );
};

export default Logo;
