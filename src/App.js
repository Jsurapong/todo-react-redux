import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">ToDo App</h1>
                    <div className="columns">
                        <div className="column">
                            <Todo />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
