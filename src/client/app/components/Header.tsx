import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <Title>
        ΞTHERSPHERE
      </Title>
      <Navigation>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/manage">My Blocks</NavLink>
      </Navigation>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.span`
  color: white;
  font-size: 29px;
  font-weight: 300;
  & > strong {
    font-weight: 400;
  }
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
`


const NavLink = styled(Link)`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 15px;
  font-size: 13px;
`
