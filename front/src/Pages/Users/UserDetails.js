import React, { Component } from 'react';
import FetchList from '../../requests/Users/List';
import LoadingAnimation from '../../Components/LoadingAnimation';
import _ from 'lodash';
import List from '../../Components/Users/List';

export default class UsersList extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            loading: true,
            users: [],
            id: props.match.params && props.match.params.id ? props.match.params.id : false
        };
    }

    componentWillMount() {
        this.loading();
    }

    loading() {
        const {
            users,
            id
        } = this.state;
        FetchList()
            .then(response => {
                const {
                    status,
                    data
                } = response;
                if (status === 200) {
                    _.each(_.values(data)[0], d => users.push(d));
                    this.getUserData(users, id);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    getUserData(users, id) {
        id = parseInt(id);
        users.forEach((user, index) => {
            if (user.id !== id) {
                console.log(user);
            }
        });
    }

    afterLoading() {
        var self = this;
        setInterval(function() {
            self.setState({ loading: false });
        }, 5000);
    }

    render() {
        const {
            loading,
            users
        } = this.state;
        let view = '';

        if (loading) {
            view = <LoadingAnimation />
        }

        view =
            <List
                data={users}
                {...this.props}
            />;

        return view;

    }
}
