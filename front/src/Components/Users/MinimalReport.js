import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class MinimalReport extends Component {
    render() {
        const {
            week,
            payment
        } = this.props;
        return (
            <Container>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>
                                Week hours: {week !== undefined ? week.weekHours : 0} hrs
                            </h3>
                        </Col>
                        <Col md={6}>
                            <h3>
                                Week overtime hours: {week !== undefined ? week.overtime : 0} hrs
                            </h3>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>
                                Week payment: $ {payment !== undefined ? payment.weekPayment : 0}
                            </h3>
                        </Col>
                        <Col md={6}>
                            <h3>
                                Week overtime payment: $ {payment !== undefined ? payment.weekOvertimePayment : 0}
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
