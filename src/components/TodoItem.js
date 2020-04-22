import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    
    getStyle = () => {
        return {
          textTransform: 'capitalize',
          fontWeight: (this.props.todo.mandatory) ? 'normal' : 'light',
          textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
      }
     
      inputStyle = () => {
        return {
            marginRight: '10px'
        }
      }

    render() {

        const { date, subject, description} = this.props.todo;

        return (
            <div key={this.key} style={this.getStyle()} className="todo-item"> 
                <p>
                    <input style={this.inputStyle()} type="checkbox" onChange={this.props.markComplete.bind(
                    this, description
                    )}
                    />  
                    {date}
                </p>
                <span style={{fontWeight: 'bold'}}>{subject+': '}</span>{description}
            </div>
        );
        
    }
}

//proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
