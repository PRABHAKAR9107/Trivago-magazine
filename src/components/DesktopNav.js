import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
    Image,
} from 'semantic-ui-react'
import HomepageHeading from './Header'
import logo from '../data_image_svg+xml;….svg'
import { Link } from 'react-router-dom';

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
    state = {}

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
                        className='desktop-menu-segment'
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                            borderless
                        >
                            <Container>
                                <Link to='/'>
                                    <Menu.Item as='a'>
                                        <Image src={logo} size='medium' className='triv-logo'></Image>
                                    </Menu.Item>
                                </Link>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                </Menu.Item>
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

export default DesktopContainer
