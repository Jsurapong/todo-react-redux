import React, { Component } from 'react';

class FromAdd extends Component {
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
                                value={this.props.todoNew}
                                onChange={this.props.addText}
                            />
                        </div>
                    </div>
                    <button type="button" onClick={this.props.submitTodo}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default FromAdd;
