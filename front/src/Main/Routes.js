import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from '../Pages/Users/UsersList';
import UserDetails from '../Pages/Users/UserDetails';
import Home from '../Pages/Home';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => <Home {...props} /> }/>
                <Route exact path='/users' render={(props) => <UsersList {...props} /> }/>
                <Route exact path='/user/details/:id' render={(props) => <UserDetails {...props}/>}/>
            </Switch>
        );
    }
}
