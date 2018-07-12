import React, { Component } from 'react';
import Button from '../containers/Button';

class ListTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: this.props.todo
        };
    }

    render() {
        const list = this.props.todo;

        const tagList = list.map((todo, key) => {
            return (
                <li key={key}>
                    <div className="columns">
                        <div className="column">
                            {key + 1} ) &nbsp;
                            {todo.text}
                        </div>
                        <div className="column has-text-right">
                            <Button index={key} />
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div className="card-content">
                <div className="content">
                    <h3>List</h3>
                    <p />
                    <ul>{tagList}</ul>
                </div>
            </div>
        );
    }
}

export default ListTodo;
