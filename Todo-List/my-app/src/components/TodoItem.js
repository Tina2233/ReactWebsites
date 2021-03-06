import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    
    }
    render() { 
        return (
        <div style = {this.getStyle()}>
            <p>{this.props.todo.title}</p>
        </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem
