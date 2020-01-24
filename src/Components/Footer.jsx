import React from 'react';
import {Container,Grid,Header,List, Segment,} from 'semantic-ui-react';

const Footer = () => (
<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container id="Contacts">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact Me' />
              <List link inverted>
                <List.Item as='a' href="https://www.linkedin.com/in/jeff-zhang/">LinkedIn</List.Item>
                <List.Item as='a' href="mailto:jeffzhangyj@gmail.com">Email</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item>Web Design and Development</List.Item>
                <List.Item>Mobile Design and Development</List.Item>
                <List.Item>Software Development</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                About
              </Header>
              <p>
                This is the official website of Jeff Zhang, it is completely built with React and the Semantic UI CSS library with custom CSS and JS
              </p>
              <p>
                  My Email is jeffzhangyj@gmail.com. Feel free to send an email to learn more 
              </p>
              <p>
              Source Code for this website is available at <a href="https://github.com/Fjallen/JeffPage"> Here</a>
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
)
export default Footer;