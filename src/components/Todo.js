import React, { Component } from 'react';
import Header from './Header';
import FromAdd from '../containers/FromAdd';
import FromUpdate from '../containers/FromUpdate';
import ListTodoData from '../containers/ListTodoData';

class Todo extends Component {
    render() {
        return (
            <div className="card">
                <Header />
                <FromAdd />
                <FromUpdate />
                <ListTodoData />
            </div>
        );
    }
}

export default Todo;
