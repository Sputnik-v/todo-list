import React, {Component} from 'react';
import TodoListItem from '../todo-list-item/todoListItem';
import './todoList.css';


class TodoList extends Component {

 
state = {
  liItem: [
    {text: 'Learn React', id: 22, stringed: false, lineType: false},
    {text: 'Build Awesome', id: 23, stringed: false, lineType: false},
    {text: 'Create React App', id: 24, stringed: false, lineType: false}
  ]}


  onActive = () => {
    this.setState(({liItem}) => {
      const newActiveArray = liItem.map(item => item.stringed === true);
      return {
        liItem: newActiveArray
      }
    })
  }

  onDelete = (id) => {
    this.setState(({liItem}) => {
      const index = liItem.findIndex(element => element.id === id);
      const before = liItem.slice(0, index);
      const after = liItem.slice(index + 1);
      const newArray = [...before, ...after];
      return {
        liItem: newArray
      }
    })
  };

  onLineText = (id) => {
    this.setState(({liItem}) => {
      const index = liItem.findIndex(element => element.id === id);
      liItem[index].lineType = !liItem[index].lineType;
      return {
        liItem: liItem
      }
    })
  }

  onLineString = (id) => {
    this.setState(({liItem}) => {
      const index = liItem.findIndex(element => element.id === id);
      liItem[index].stringed = !liItem[index].stringed;
      return {
        liItem: liItem
      }
    })
  }

  

  onNewItem = (e) => {
    e.preventDefault();
    const valueText = document.querySelector('.input').value;
    const newArra = {text: valueText, id: this.state.liItem.length + 1, stringed: false};
    e.target.reset();
    this.setState(({liItem}) => {
      const newAddElement = [...liItem, newArra];
      return {
        liItem: newAddElement
      }
    
    })
  }

  

  render() {


    return (
      <div className='todo'>
        <TodoListItem data={this.state} onDelete={this.onDelete} onLineString={this.onLineString} onLineText={this.onLineText}/>
        <form className='form' onSubmit={(e) => this.onNewItem(e)}>
          <input type="text" placeholder='item' className='input'/>
          <button className='button__item'>New Item</button>
        </form>
        
        
      </div>
    
    )
  }
    
}   

  

  export default TodoList;