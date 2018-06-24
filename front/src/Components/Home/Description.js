import React from 'react';
import WelcomeImage from './WelcomeImage';
import { Container } from 'reactstrap';

export default Home => (
    <Container
        className='mg-tp-60'
    >
        <p>
            Welcome to my 7Shifts Code Challenge.
        </p>
        <p>
            I'm so happy to have you here, in this challenge we will calculate the time punches of users in their weeking workly.
        </p>
        <p>
            I really hope that you have a great time and enjoy looking my code and testing my challenge.
        </p>
        <p>
            I really hope that we could talk soon.
            <br/>
            If you have any questions, send me a message at <a href="mailto:messhias@gmail.com">messhias@gmail.com</a>
        </p>
        <p>
            Thanks to much and I hope that you enjoy it! Have fun!
        </p>
        <WelcomeImage />
    </Container>
);
