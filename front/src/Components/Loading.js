import React, { Component } from 'react';
import logo from '../imgs/7Shifts.png';
import loadingGif from '../imgs/loading.gif';
import { Media } from 'reactstrap';
import { Container, Row } from 'reactstrap';

export default class Loading extends Component {

    render() {
        return (
            <Container>
                <Row
                    className="main-title-loading-page"
                >
                  <Media>
                      <Media
                          heading>
                          Welcome to 7Shifts Code Challenge - By Fabio William Conceição
                      </Media>
                      <Media>
                          <Media
                              object
                              src={logo}
                              alt="Welcome to 7Shifts Code Challenge! By Fabio William Conceição"
                              className="logo"
                          />
                      </Media>
                  </Media>
                  <Row>
                      <Media>
                          <Media
                              object
                              src={loadingGif}
                              alt="Welcome to 7Shifts Code Challenge! By Fabio William Conceição"
                              className="logo"
                          />
                      </Media>
                  </Row>
                </Row>
            </Container>
        );
    }
}
