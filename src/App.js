import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {  Container,Grid, Header,
  Icon,Image,Menu,Responsive, Divider,
  Segment, Sidebar,Visibility } from 'semantic-ui-react'
import HomepageHeading from './Components/Heading'
import Footer from './Components/Footer'
import './App.css'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {
    activeItem:0
  }
  viewHome = () =>{
    this.setState({
      activeItem:0
    })
    var home = document.getElementById("root");
    home.scrollIntoView(); 
  }
  viewProject = () => {
    this.setState({
      activeItem:1
    })
    var project = document.getElementById("Projects");
    project.scrollIntoView();
  }
  viewTestimonial=()=>{
    this.setState({
      activeItem:2
    })
    var testimonial = document.getElementById("Testimonials");
    testimonial.scrollIntoView();
  }
  viewContact=()=>{
    this.setState({
      activeItem:3
    })
    var contact = document.getElementById("Contacts");
    contact.scrollIntoView();
  }
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active={this.state.activeItem===0} onClick={this.viewHome}> Home </Menu.Item>
                <Menu.Item as='a' active={this.state.activeItem===1} onClick={this.viewProject}>Projects</Menu.Item>
                <Menu.Item as='a' active={this.state.activeItem===2} onClick={this.viewTestimonial}>Testimonials</Menu.Item>
                <Menu.Item as='a' active={this.state.activeItem===3} onClick={this.viewContact}>Contact</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {
    activeItem:0
  }
  viewHome = () =>{
    this.setState({
      activeItem:0
    })
    var home = document.getElementById("root");
    home.scrollIntoView(); 
  }
  viewProject = () => {
    this.setState({
      activeItem:1
    })
    var project = document.getElementById("Projects");
    project.scrollIntoView();
  }
  viewTestimonial=()=>{
    this.setState({
      activeItem:2
    })
    var testimonial = document.getElementById("Testimonials");
    testimonial.scrollIntoView();
  }
  viewContact=()=>{
    this.setState({
      activeItem:3
    })
    var contact = document.getElementById("Contacts");
    contact.scrollIntoView();
  }
  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
        <Menu.Item as='a' active={this.state.activeItem===0}> Home </Menu.Item>
        <Menu.Item as='a' active={this.state.activeItem===1} onClick={this.viewProject}>Projects</Menu.Item>
        <Menu.Item as='a' active={this.state.activeItem===2} onClick={this.viewTestimonial}>Testimonials</Menu.Item>
        <Menu.Item as='a' active={this.state.activeItem===3} onClick={this.viewContact}>Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
  <Segment style={{ padding: '5em 0em' }} vertical>
    <div id="Projects">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Gup Shup by Bombay Bistro
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Currently, I am working on developing and designing the Mobile and Web Application for a London restaurant looking to Franchise. The application will be using React Native and will be available for both iOS and Android
            </p>
            <p style={{ fontSize: '1.33em' }}>
            I also developed custom software to manage digital displays in the storefront using a Raspberry Pi Cluster.
            </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
            <Image id="zoom" bordered rounded size='medium' src="/app.png" />
        </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider className="divider"></Divider>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column floated='left' width={7}>
            <Image id="zoom" bordered rounded size='huge' src="/AlitheiaTechSnapshot.png" />
        </Grid.Column>
        <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Alitheia Technologies
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            I developed the MVP Web Application for Alitheia Technologies Inc. The application was built in the LAMP stack and had features like User Authentication and User Specific Dashboard
            </p>
            <p style={{ fontSize: '1.33em' }}>
              I worked directly with the CTO during this project and you can read more below or click <a href="#Testimonials">here</a>
            </p>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider className="divider"></Divider>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Gamealytics at Hack the North
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Gamealytics was a full-stack project built for Hack the North, where players of the game TFT are able to enter their username and receive performance analytics.
            </p>
            <p style={{ fontSize: '1.33em' }}>
            I developed the Flask backend server, which comprised of a web scraper, and a logarithmic regressor. I also taught the other members of the group the foundations of React and allowed them to experience front-end development with React. I also integrated Firebase to store user's current performance as a cache.
            </p>
            <p style={{ fontSize: '1.33em' }}>
            The Code can be found <a href="https://github.com/Fjallen/GitGudGamers">Here</a>
            </p>
        </Grid.Column>
        <Grid.Column floated='right' width={7}>
            <Image id="zoom" bordered rounded size='large' src="/gamealytics.png" />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Segment>
  <Segment id="Testimonials" style={{ padding: '5em 0em' }} vertical>
      <Grid container stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <p style={{ fontSize: '1.4em' }}>
              "I contracted Jeff to create a business website that had strict requirements (i.e. user registration and login, user specific content, the ability to embed content, etc.), all under a tight timeline. I approached Jeff with a rough guideline on what I was looking for and he provided excellent suggestions for design, usability and content delivery. The build process was fast and seamless with Jeff integrating revisions quickly. He was always responsive to communication and accommodating to screen shares and phone calls. It was a pleasure to work with Jeff on the project, and I will be recommending/using Jeff’s services in the future."
            </p>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/SchwartzentruberLinkedin.jpg' />
              <b>Dr. Schwartzentruber</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  <Footer />
</ResponsiveContainer>
)

export default HomepageLayout