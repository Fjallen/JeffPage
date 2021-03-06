import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Heading = ({ mobile }) => (
    <Container text>
        <div id="Home">
            <Header
            as='h1'
            content='Jeff Zhang'
            inverted
            style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Software Engineering, Full Stack, Data Science'
            inverted
            style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        </div>
    </Container>
  )
  
Heading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default Heading;