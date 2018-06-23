import React,{ Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import UsersList from '../Pages/Users/UsersList';
import UserDetails from '../Pages/Users/UserDetails';


export default class Routes extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => <UsersList {...props} /> }/>
                <Route exact path='/user/details/:id' component={UserDetails}/>
            </Switch>
        );
    }
}
