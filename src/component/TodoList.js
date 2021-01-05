import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Item from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>to do list</h1>
                <TodoItem />
            </div>
        );
    }
}

export default TodoList;