import React, { Component } from 'react';
import LoadingAnimation from '../../Components/LoadingAnimation';
import _ from 'lodash';
import UserTimePunches from '../../Components/Users/UserTimePunches';

import FetchList from '../../requests/Users/List';
import SubmitPunches from '../../requests/Users/Submit';
import FetchLocations from '../../requests/Locations/List';
import FetchTimePunches from '../../requests/TimePunches/List';

export default class UsersList extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            loading: true,
            users: [],
            currentUser: [],
            userLocation: [],
            locations: [],
            timePunches: [],
            userTimePunches: [],
            id: props.match.params && props.match.params.id ? props.match.params.id : false
        };
    }

    componentWillMount() {
        this.loading();
    }

    componentDidMount() {
        var self = this;
        setInterval(function() {
            self.submitPunches();
        }, 5000);
    }

    submitPunches() {
        const me = this.state;
        if (me.currentUser.length > 0) {
            SubmitPunches(me)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    loading() {
        this.fetchUsers();
        this.fetchLocation();
    }

    fetchLocation() {
        FetchLocations()
            .then(response => {
                const {
                    status,
                    data
                } = response;
                if (status === 200) {
                    this.setState({ locations: _.values(data)[0] });
                    this.extractUserLocation(_.values(data)[0]);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    extractUserLocation(location) {
        const {
            currentUser
        } = this.state;
        if (currentUser[0].locationId === location.id) {
            this.setState({ userLocation: location });
            this.fetchTimePunches(currentUser);
        }
    }

    fetchTimePunches(currentUser) {
        FetchTimePunches()
            .then(response => {
                const {
                    status,
                    data
                } = response;
                if (status === 200) {
                    this.setState({ timePunches: _.each(_.values(data)) });
                    this.extractUserTimePunches(currentUser);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    extractUserTimePunches(currentUser) {
        const {
            timePunches
        } = this.state;
        const userTimePunches = [];

        _.each(timePunches, function(p) {
            if (p.userId === currentUser[0]['id'] && p.locationId === currentUser[0]['locationId']) {
                userTimePunches.push(p);
            }
        });
        this.setState({ userTimePunches });
    }

    fetchUsers() {
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
        const {
            currentUser
        } = this.state;
        id = parseInt(id);
        users.forEach((user, index) => {
            if (user.id === id) {
                currentUser.push(user);
            }
        });
        this.setState({ currentUser });
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
            userTimePunches,
        } = this.state;
        let view = '';

        if (loading) {
            view = <LoadingAnimation />
        }

        view =
            <UserTimePunches
                data={userTimePunches}
                isDetail
            />;

        return view;

    }
}
