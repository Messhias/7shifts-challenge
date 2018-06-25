import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';

import List from '../../Components/Users/List';
import LoadingAnimation from '../../Components/LoadingAnimation';
import Menu from '../../Components/Home/Menu';

import FetchList from '../../requests/Users/List';

export default class UsersList extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            loading: true,
            users: []
        };
    }

    componentWillMount() {
        this.loading();
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    loading() {
        const {
            users
        } = this.state;
        FetchList()
            .then(response => {
                const {
                    status,
                    data
                } = response;
                if (status === 200) {
                    _.each(_.values(data)[0], d => users.push(d));
                    this.setState({ users });
                }
            })
            .catch(err => {
                console.log(err);
            });
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

        view =(
            <Container>
                <Menu />
                <Container>
                    <h3>
                        Click on a row to see the user details
                    </h3>
                </Container>
                <List
                    isDetail={false}
                    data={users}
                    {...this.props}
                />
            </Container>
        );

        return view;

    }
}
