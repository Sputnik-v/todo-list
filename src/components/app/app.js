import React, { Component } from 'react';
import TodoList from '../todo-list/todoList';
import AppHeader from '../app-header/appHeader';
import FilterList from '../filter-list/filterList';
import './app.css';


class App extends Component {



    render() {
      return (
        <div className='appAllCss'>
          <AppHeader/>
          <FilterList/>
          <TodoList/>
        </div>
      )
    }
  };

  export default App;