import React from 'react';
import image from '../../imgs/welcome.png';
import { Media } from 'reactstrap';
import { Container, Row } from 'reactstrap';

export default WelcomeImage => (
    <Container>
        <Row
            className="main-title-loading-page"
        >
          <Media
              href="/"
          >
          <Media
              heading>
              It's so excited to have you here!
          </Media>
              <Media>
                  <Media
                      object
                      src={image}
                      alt="Welcome to 7Shifts Code Challenge! By Fabio William Conceição"
                      className="logo"
                      />
              </Media>
          </Media>
        </Row>
    </Container>
);
