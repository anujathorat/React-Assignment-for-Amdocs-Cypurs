import React, { Component } from 'react';
import './styles/custom.css';
import Routes from './routes';

class App extends Component {

    constructor(){
        super();
        this.state={
            appName: "React Redux Assignment",

        }
    }

    render() {
        return (
            <div>
                <div>
                      <Routes name={this.state.appName}/>
                </div>
            </div>
        );
    }
}

export default App;
