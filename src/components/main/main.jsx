import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const {menuDefault} = this.props;

    return (
      <main className="main">

        <div className="container">
          <Menu menuDefault={menuDefault}></Menu>
        </div>

      </main>
    );
  }
}

Main.propTypes = {
  menuDefault: PropTypes.bool.isRequired
};
