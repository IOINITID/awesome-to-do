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
    const {itemsData, menuDefault, onModalSwitch, onDoneSwitch, onTaskFixed} = this.props;

    return (
      <main className="main">

        <div className="container">
          <Menu itemsData={itemsData} onModalSwitch={onModalSwitch} menuDefault={menuDefault}></Menu>
        </div>

        {
          itemsData.length ? <div className="container">
            <Tasks itemsData={itemsData} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onModalSwitch={onModalSwitch}></Tasks>
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
  onTaskFixed: PropTypes.func.isRequired
};
