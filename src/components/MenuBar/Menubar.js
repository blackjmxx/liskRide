import React, {Component} from 'react';

import { connect } from 'react-redux';

import {Item, Menu} from 'semantic-ui-react';

import {Link, withRouter} from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import {SvgIcon} from '../SvgIcon/SvgIcon';
import {cardIcon} from '../../assets/icons/cardIcon';
import {loginIcon} from '../../assets/icons/loginIcon';
import {notificationIcon} from '../../assets/icons/notificationIcon';

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
              label: <FormattedMessage id={"menu.search"} />,
              icon: cardIcon
          },
          {
              path: '/home/travel',
              name: 'travel',
              label: <FormattedMessage id={"menu.travels"} />,
              icon: notificationIcon
          },
          {
            path: '/home/car',
            name: 'car',
            label: <FormattedMessage id={"menu.car"} />,
            icon: notificationIcon
          },
          {
              path: '/home/params',
              name: 'login',
              label: <FormattedMessage id={"menu.account"} />,
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

// const mapActionCreators = {
//     addBadgeToMenu
//   }

const mapStateTopProps = (state) => {
    return {
        isGiftNotification: state.home.isGiftNotification,
    }
  }

export default withRouter(connect(mapStateTopProps, null)(TabBarRow))
