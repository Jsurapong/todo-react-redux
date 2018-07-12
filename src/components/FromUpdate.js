import React, { Component } from 'react';

class FromUpdate extends Component {
    render() {
        return (
            <div className="card-content">
                <div className="control">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input is-warning"
                                type="text"
                                placeholder="Update input"
                                value={this.props.edit.text}
                                onChange={this.props.ChangeTodo}
                            />
                        </div>
                    </div>
                    <button type="button" onClick={this.props.SubmitUpdate}>
                        Update
                    </button>
                </div>
            </div>
        );
    }
}

export default FromUpdate;
