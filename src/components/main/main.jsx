import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const {itemsData, filterType, menuDefault, onModalSwitch, onDoneSwitch, onTaskFixed, onFilterChange, onMenuSwitch, itemsQuantity} = this.props;

    return (
      <main className="main">

        <div className="container">
          <Menu itemsQuantity={itemsQuantity} onModalSwitch={onModalSwitch} menuDefault={menuDefault} onFilterChange={onFilterChange} onMenuSwitch={onMenuSwitch}></Menu>
        </div>

        {
          itemsData.length ? <div className="container">
            <Tasks itemsData={itemsData} filterType={filterType} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onModalSwitch={onModalSwitch}></Tasks>
          </div> : <div className="container">
            <Greeting></Greeting>
          </div>
        }

      </main>
    );
  }
}

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  menuDefault: PropTypes.bool.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  itemsQuantity: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired
};
