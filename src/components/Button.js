import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button
                    className="button is-warning is-small"
                    onClick={this.props.callTodo.bind(this, this.props.index)}
                >
                    Edit
                </button>
                <button
                    onClick={this.props.removeTodo.bind(this, this.props.index)}
                    className="button is-danger is-small"
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Button;
