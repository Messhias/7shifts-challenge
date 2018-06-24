import React, { Component } from 'react';
import Description from '../Components/Home/Description';
import Menu from '../Components/Home/Menu';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="class-name">
                <Menu />
                <Description />
            </div>
        );
    }
}
