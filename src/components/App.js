import React, { Component } from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import GameForm from './GameForm'
import GamesList from './GamesList';

export default class App extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui three item menu">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/Games" className="item">Games</Link>
                    <Link to="/Game/New" className="item">Games Action</Link>
                </div>
                <Switch>
                    <Route path="/Games" component={GamesList}></Route>
                    <Route path="/Game/:id" component={GameForm} ></Route>
                </Switch>
            </div>
        )
    }
}
