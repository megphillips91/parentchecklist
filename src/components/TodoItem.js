import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    
    getStyle = () => {
        return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px dotted #ccc',
          fontWeight: (this.props.todo.mandatory) ? 'bold' : 'normal',
          textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
      }
     
      inputStyle = () => {
        return {
            marginRight: '10px'
        }
      }

    render() {

        const { description, mandatory} = this.props.todo;

        if(mandatory){
            return (
                <div style={this.getStyle()} > 
                    <input style={this.inputStyle()} type="checkbox" onChange={this.props.markComplete.bind(
                        this, description
                    )}/>  
                    {description}
                </div>
            );
        } else {
            return (
                <div style={this.getStyle()} > 
                    <input style={this.inputStyle()} type="checkbox" onChange={this.props.markComplete.bind(
                        this, description
                        )}/>  
                    {description}
                </div>
                
            );
        }
        
    }
}

//proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
