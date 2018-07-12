import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, getTodo } from '../actions';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
            dispatch: this.props.dispatch
        };
    }
    removeTodo = index => {
        this.state.dispatch(deleteTodo(index));
    };

    callTodo = index => {
        console.log(this.state.dispatch(getTodo(index)));
    };
    render() {
        const index = this.state.index;
        return (
            <div>
                <button
                    className="button is-warning is-small"
                    onClick={this.callTodo.bind(this, index)}
                >
                    Edit
                </button>
                <button
                    onClick={this.removeTodo.bind(this, index)}
                    className="button is-danger is-small"
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(Button);
