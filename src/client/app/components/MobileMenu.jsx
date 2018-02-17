import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'client/app/actions';

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  z-index: 99999999;
  box-shadow: 0px 1px 8px hsla(0,0%,0%,.2);
`;
const BtnLogin = styled.a`
  display: flex;
  text-decoration: none;
  color: hsl(213, 28%, 23%);
  font-weight: 700;
  font-size: 17px;
  background-color: hsl(0, 0%, 96%);
  text-align: center;
  display: block;
  padding: 23px;
  outline: none;
  &:hover {
    color: hsl(212, 72%, 59%);
  }
`;
const NavItem = styled(Link)`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: hsl(213, 28%, 23%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px hsl(0, 0%, 85%);;
  padding: 20px 0;
  text-decoration: none;
  outline: none;
`;
const NavAnchor = styled.a`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: hsl(213, 28%, 23%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px hsl(0, 0%, 85%);;
  padding: 20px 0;
  text-decoration: none;
  outline: none;
`;
const NavIcon = styled.img`
  max-width: 17px;
  max-height: 17px;
  margin-right: 4px;
`

const items = [
  {
    id: 'icos',
    label: 'ICOs',
    to: '/icos',
    iconUrl: '/img/icon-tokens.svg'
  },
  {
    id: 'stats',
    label: 'Stats',
    to: '/stats',
    iconUrl: '/img/icon-stats.svg'
  },
  {
    id: 'chat',
    label: 'Chat',
    to: '/chat',
    iconUrl: '/img/icon-chat.svg',
    type: 'anchor'
  },
  {
    id: 'wallet',
    label: 'Wallet',
    to: '/wallet',
    iconUrl: '/img/icon-wallet.svg',
    type: 'anchor'
  }
];

class MobileMenu extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.handleClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickDocument);
  }

  handleClickDocument = (event) => {
    const didClickMenu = event.target.contains(this.root);

    if (!didClickMenu) {
      this.props.onClose();
    }
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Container innerRef={(c) => { this.root = c; }}>
        {!isAuthenticated &&
          <BtnLogin href="/login">Login</BtnLogin>
        }
        {items.map(item => (item.type === 'anchor') ? (
          <NavAnchor key={item.id} href={item.to}>
            <NavIcon src={item.iconUrl} />
            &nbsp;
            {item.label}
          </NavAnchor>
        ): (
          <NavItem key={item.id} to={item.to} onClick={this.props.onClose}>
            <NavIcon src={item.iconUrl} />
            &nbsp;
            {item.label}
          </NavItem>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.app.user
});
const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(actions.setMenuVisibility(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
