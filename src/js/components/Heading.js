import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

export default class Heading extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing secondary id="topMenu">
                    <Link to='/'>
                        <Menu.Item
                            name='home' 
                            active={activeItem === 'home'} 
                            onClick={this.handleItemClick}     
                        />
                    </Link>
                    <Link to='/policies'>
                        <Menu.Item
                        name='policies'
                        active={activeItem === 'policies'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/news'>
                        <Menu.Item
                        name='news'
                        active={activeItem === 'news'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/advantage'>
                        <Menu.Item
                        name='advantage'
                        active={activeItem === 'advantage'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/faculty'>
                        <Menu.Item
                        name='faculty'
                        active={activeItem === 'faculty'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/calendar'>
                        <Menu.Item
                        name='calendar'
                        active={activeItem === 'calendar'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/curriculum'>
                        <Menu.Item
                        name='curriculum'
                        active={activeItem === 'curriculum'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/summer'>
                        <Menu.Item
                        name='summer'
                        active={activeItem === 'summer'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/nutcracker'>
                        <Menu.Item
                        name='nutcracker'
                        active={activeItem === 'nutcracker'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/companies'>
                        <Menu.Item
                        name='companies'
                        active={activeItem === 'companies'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/musicals'>
                        <Menu.Item
                        name='musicals'
                        active={activeItem === 'musicals'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to='/scholarship'>
                        <Menu.Item
                        name='scholarship'
                        active={activeItem === 'scholarship'}
                        onClick={this.handleItemClick}
                        />
                    </Link>
                    <Menu.Menu position='right'>
                        <Link to='/contact'>
                            <Menu.Item
                            name='contact'
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                            />
                        </Link>
                    </Menu.Menu>
                </Menu>

            </div>
        )
    }
}

