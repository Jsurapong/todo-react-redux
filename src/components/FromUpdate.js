import React, { Component } from 'react';

class FromUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indexEdit: this.props.edit.index,
            textEdit: this.props.edit.text,
            dispatch: this.props.dispatch
        };
    }

    updateText = event => {
        this.setState({
            textEdit: event.target.value
        });
    };

    getConsole = event => {
        this.setState({
            indexEdit: this.props.edit.index,
            textEdit: this.props.edit.text
        });
    };

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
