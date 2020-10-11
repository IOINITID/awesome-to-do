import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';
import Info from '../info/info.jsx';

const Main = (props) => {
  const {itemsData, wellcomeDefault, filterType, onModalSwitch, onDoneSwitch, onTaskFixed, onFilterChange, itemsQuantity} = props;

  const getNoTasksComponent = () => {
    switch (wellcomeDefault) {
      case `true`:
        return <Greeting />;
      case `false`:
        return <Info filterType={filterType} />;
      default:
        return <Greeting />;
    }
  };

  return (
    <main className="main">

      <div className="container">
        <Menu itemsQuantity={itemsQuantity} onModalSwitch={onModalSwitch} onFilterChange={onFilterChange} />
      </div>

      {
        itemsData.length ? <div className="container">
          <Tasks itemsData={itemsData} filterType={filterType} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onModalSwitch={onModalSwitch} />
        </div> : <div className="container">
          {getNoTasksComponent()}
        </div>
      }

    </main>
  );
};

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  itemsQuantity: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  wellcomeDefault: PropTypes.string.isRequired
};

export default Main;
