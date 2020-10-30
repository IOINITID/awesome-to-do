import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {buttonData: {className, type, dataType, events}} = props;

  return (
    <button
      className={className}
      type={type}
      data-type={dataType}
      onClick={events.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  buttonData: PropTypes.shape({
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dataType: PropTypes.string.isRequired,
    events: PropTypes.shape({
      onClick: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Button;
