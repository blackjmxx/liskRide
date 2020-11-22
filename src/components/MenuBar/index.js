import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Item, Menu} from 'semantic-ui-react';

import {Link, withRouter} from 'react-router-dom';

import {SvgIcon} from '../icons';
import {cardIcon} from '../icons/cardIcon';
import {loginIcon} from '../icons/loginIcon';
import {notificationIcon} from '../icons/notificationIcon';
import {scanIcon} from '../icons/scanIcon';

import {ActiveTitle, menuBarStyle, MenuLinkStyles, Title} from './styles';

class TabBarRow extends Component {
    statete = {
        timeout: 3000,
    }

    constructor(props) {
        super(props);
        this.idleTimer = null;
      } 

  render() {
      const menus = [
          {
              path: '/home',
              name: 'home',
              label: 'home',
              icon: cardIcon
          },
          {
              path: '/home/card',
              name: 'scan',
              label:'scan',
              icon: scanIcon
          },,
          {
              path: '/home/infos',
              name: 'notifications',
              label: 'notifications',
              icon: notificationIcon
          },
          {
              path: '/home/params',
              name: 'login',
              label: 'login',
              icon: loginIcon,
              dotted: false
          }
      ];
    const {location} = this.props;
    return (
        <>
        <Menu style={menuBarStyle} borderless={true} icon='labeled'>
          {
              menus.map((menu, i) => (
                  <Link to={menu.path} key={i}>
                      <Item style={MenuLinkStyles} name={menu.name}>
                          <SvgIcon svgContent={menu.icon} active={location.pathname === menu.path} dotted={menu.dotted} />
                          {
                              location.pathname === menu.path ? (
                                  <ActiveTitle>{menu.label}</ActiveTitle>
                              ) : (
                                  <Title>{menu.label}</Title>
                              )
                          }
                      </Item>
                  </Link>
              ))
          }
      </Menu>
        </>
    );
  }
};

const mapStateTopProps = (state) => {
    return {
        isGiftNotification: state.home.isGiftNotification,
    }
  }

export default withRouter(connect(mapStateTopProps, null)(TabBarRow))
