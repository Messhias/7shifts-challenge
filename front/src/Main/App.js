import React, { Component } from 'react';
import Loading from '../Components/Loading';
import Routes from './Routes';
import Header from '../Components/Header';

export default class App extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            loading: true
        };

    }

    componentWillMount() {
        this.loading();
    }

    loading() {
        var self = this;
        setInterval(function() {
            self.setState({ loading: false });
        }, 5000);
    }

    render() {
        const {
            loading
        } = this.state;
        let view = '';
        if (loading) {
            view = <Loading />
        }
        view = (
            <div>
                <Header />
                <Routes
                    history={this.props.history}
                />
            </div>
        );

        return view;
    }

}
