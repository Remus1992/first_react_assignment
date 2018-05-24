import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        name: "Walker"
    };

    clickNameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput changedName={this.clickNameHandler}
                currentName={this.state.name}/>
                <UserOutput name="Remington"/>
                <UserOutput name={this.state.name}/>
            </div>
        );
    }
}

export default App;
