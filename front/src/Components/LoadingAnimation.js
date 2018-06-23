import React, { Component } from 'react';
import loadingGif from '../imgs/loading.gif';
import { Media } from 'reactstrap';
import { Container, Row } from 'reactstrap';

export default class LoadingAnimation extends Component {

    render() {
        return (
            <Container>
                <Row
                    className="main-title-loading-page"
                >
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
