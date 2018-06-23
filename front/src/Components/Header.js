import React,{Component} from 'react';
import logo from '../imgs/7Shifts.png';
import { Media } from 'reactstrap';
import { Container, Row } from 'reactstrap';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row
                    className="main-title-loading-page"
                >
                  <Media
                      href="/"
                  >
                      <Media>
                          <Media
                              object
                              src={logo}
                              width={200}
                              alt="Welcome to 7Shifts Code Challenge! By Fabio William Conceição"
                              className="logo"
                              />
                      </Media>
                      <Media
                          heading>
                          Welcome to 7Shifts Code Challenge - By Fabio William Conceição
                      </Media>
                  </Media>
                </Row>
            </Container>
        );
    }
}
