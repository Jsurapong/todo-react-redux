import React, { Component } from 'react';

class Headers extends Component {
    render() {
        return (
            <header className="card-header">
                <p className="card-header-title"> To-do-list</p>
                <a
                    href=""
                    className="card-header-icon"
                    aria-label="more options"
                >
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </a>
            </header>
        );
    }
}

export default Headers;
