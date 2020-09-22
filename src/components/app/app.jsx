import React, {Component, Fragment} from 'react';
import {v4 as uuid} from 'uuid';
import Header from '../header/header.jsx';
// import Search from '../search/search.jsx';
// import Filter from '../filter/filter.jsx';
// import List from '../list/list.jsx';
// import Form from '../form/form.jsx';

// import './app.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      itemsData: [
        {title: `Дело номер один`, isDone: false, isFixed: false, id: uuid()},
        {title: `Дело номер два`, isDone: false, isFixed: false, id: uuid()},
        {title: `Дело номер три`, isDone: false, isFixed: false, id: uuid()}
      ]
    };

    this.onItemDelete = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.filter((item) => item.id !== id);

        return {
          itemsData
        };
      });
    };

    this.onItemAdd = (description) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();
        const itemData = {
          title: description,
          isDone: false,
          isFixed: false,
          id: uuid()
        };

        itemsData.push(itemData);

        return {
          itemsData
        };
      });
    };

    this.onItemDone = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.isDone = !item.isDone;
          }
        });

        return {
          itemsData
        };
      });
    };

    this.onItemFixed = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.isFixed = !item.isFixed;
          }
        });

        return {
          itemsData
        };
      });
    };
  }

  render() {
    // const {itemsData} = this.state;
    // const itemsDone = itemsData.filter((item) => item.isDone).length;
    // const itemsNotDone = itemsData.filter((item) => !item.isDone).length;

    return (
      <Fragment>
        <Header></Header>
      </Fragment>
      // <div className="wrapper">
      //   <Header
      //     toDoQuantity={itemsNotDone}
      //     toDoDone={itemsDone}
      //   />
      //   <div className="search-and-filter">
      //     <Search />
      //     <Filter />
      //   </div>
      //   <List itemsData={itemsData} onDelete={this.onItemDelete} onDone={this.onItemDone} onFixed={this.onItemFixed}/>
      //   <Form onAdd={this.onItemAdd} />
      // </div>
    );
  }
}
