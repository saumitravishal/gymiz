import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" name="Home"/>
          <Menu.Item as={NavLink} to="/test" name="Test" />
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
