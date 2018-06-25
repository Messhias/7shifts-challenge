import React, { Component } from 'react';
import LoadingAnimation from '../../Components/LoadingAnimation';
import _ from 'lodash';
import { Container, Row } from 'reactstrap';

import UserTimePunches from '../../Components/Users/UserTimePunches';
import Menu from '../../Components/Home/Menu';
import Chart from '../../Components/Chart';

import FetchList from '../../requests/Users/List';
import SubmitPunches from '../../requests/Users/Submit';
import FetchLocations from '../../requests/Locations/List';
import FetchTimePunches from '../../requests/TimePunches/List';

export default class UsersList extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            id: props.match.params && props.match.params.id ? props.match.params.id : false,
            loading: true,
            users: [],
            currentUser: [],
            userLocation: [],
            locations: [],
            timePunches: [],
            userTimePunches: [],
            data: []
        };
    }

    componentWillMount() {
        this.loading();
    }

    submitPunches() {
        const me = this.state;
        if (me.currentUser.length > 0) {
            SubmitPunches(me)
                .then(response => {
                    const {
                        data
                    } = response;

                    if (data.status) {
                        this.setState({
                            loading: false,
                            data: data.payload
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    loading() {
        this.fetchUsers();
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
        if (currentUser[0] !== undefined) {
            if (currentUser[0].locationId === location.id) {
                this.setState({ userLocation: location });
                this.fetchTimePunches(currentUser);
            }
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
        this.submitPunches();
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
        id = parseInt(id, 10);
        users.forEach((user, index) => {
            if (user.id === id) {
                currentUser.push(user);
            }
        });
        this.setState({ currentUser });
        this.fetchLocation();
    }

    render() {
        const {
            loading,
            userTimePunches,
            data
        } = this.state;
        const {
            week,
            payment
        } = data;
        let view = '';

        if (loading) {
            view = <LoadingAnimation />;
        }

        view =(
            <Container>
                <Row>
                    <Menu />
                </Row>
                <Row>
                    <UserTimePunches
                        data={userTimePunches}
                        isDetail
                    />
                </Row>
                <Row>
                    <p>
                        Week hours: {week != undefined ? week.weekHours : 0} hrs
                    </p>
                    <p>
                        Week overtime hours: {week != undefined ? week.overtime : 0} hrs
                    </p>
                </Row>
                <Row>
                    <p>
                        Week payment: $ {payment != undefined ? payment.weekPayment : 0}
                    </p>
                    <p>
                        Week overtime payment: $ {payment != undefined ? payment.weekOvertimePayment : 0}
                    </p>
                </Row>
            </Container>
        );

        return view;

    }
}
