import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';
import Info from '../info/info.jsx';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction} from '../../actions/index.js';

const Main = (props) => {
  const {itemsData, wellcomeDefault, onModalSwitch, itemsQuantity, isMenuOpen, onMenuSwitch} = props;

  const getNoTasksComponent = () => {
    switch (wellcomeDefault) {
      case `true`:
        return <Greeting />;
      case `false`:
        return <Info />;
      default:
        return <Greeting />;
    }
  };

  const onMainClick = (evt) => {
    const menuElement = document.querySelector(`.menu`);

    if (isMenuOpen && !menuElement.contains(evt.target)) {
      onMenuSwitch();
    }
  };

  return (
    <main className="main" onClick={onMainClick}>

      <div className="container">
        <Menu itemsQuantity={itemsQuantity} onModalSwitch={onModalSwitch} />
      </div>

      {
        itemsData.length ?
          <div className="container">
            <Tasks itemsData={itemsData} onModalSwitch={onModalSwitch} />
          </div> :
          <div className="container">
            {getNoTasksComponent()}
          </div>
      }

    </main>
  );
};

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  itemsQuantity: PropTypes.array.isRequired,
  wellcomeDefault: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
