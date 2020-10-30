import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '../../../public/img/menu-icon.svg';
import AddIcon from '../../../public/img/add-icon.svg';
import LogoIcon from '../../../public/img/logo-icon.svg';
import PinIcon from '../../../public/img/pin-icon.svg';

const Icon = (props) => {
  const {iconData: {className, name, width, height}} = props;

  let icon;

  switch (name) {
    case `menu`:
      icon = <MenuIcon className={`${className}__icon`} width={width} height={height} />;
      break;
    case `add`:
      icon = <AddIcon className={`${className}__icon`} width={width} height={height} />;
      break;
    case `logo`:
      icon = <LogoIcon className={`${className}__icon`} width={width} height={height} />;
      break;
    case `pin`:
      icon = <PinIcon className={`${className}__icon`} width={width} height={height} />;
      break;
  }

  return (
    <Fragment>
      {icon}
    </Fragment>
  );
};

Icon.propTypes = {
  iconData: PropTypes.shape({
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired
};

export default Icon;
