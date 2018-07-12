import React, { Component } from 'react';
import { addTodo } from '../actions';

class FromAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    addText = event => {
        const textNew = event.target.value;
        this.setState({ text: textNew });
    };

    submitTodo = event => {
        if (this.state.text === '') {
            return;
        }

        this.props.dispatch(addTodo(this.state.text));
        this.setState({ text: '' });
    };

    render() {
        return (
            <div className="card-content">
                <div className="content">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input is-primary"
                                type="text"
                                placeholder="Add input"
                                value={this.state.text}
                                onChange={this.addText}
                            />
                        </div>
                    </div>
                    <button type="button" onClick={this.submitTodo}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default FromAdd;
