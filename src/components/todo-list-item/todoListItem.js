import React, {Component} from 'react';
import './todoListItem.css';

class TodoListItem extends Component {

    
  

      render() { 

        const {data:{liItem}} = this.props;
        const {onDelete, onLineString, onLineText} = this.props;



        const elements = liItem.map(({text, id, stringed, lineType}) => {

          let line = 'todo_list_all';
          if (stringed) {
            line += ' kilt'
          }
          let lineText = 'list_item';
          if (lineType) {
            lineText += ' done';
          }

          

          return (

                    <div key={id} className={line}>
                        <p onClick={() => onLineText(id)} className={lineText}>{text}</p>
                        <div className="icons_item">
                            <div className="icons delete" onClick={() => onDelete(id)}></div>
                            <div className="icons ok" onClick={() => onLineString(id)}></div>
                        </div>
                    </div>

                
          )
        })

        return elements;

        }
   

       
}

export default TodoListItem;