import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container>
      <Link to="/" style={{
        textDecoration: 'none'
      }}>
        <Title>
          ΞTHERSPHERE
        </Title>
      </Link>
      <Navigation>
        <NavLink to="/manage">My Blocks</NavLink>
        <AnchorLink href="https://github.com/ethersphere-project" target="_blank">Github</AnchorLink>
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
  text-decoration: none;
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
	&:hover {
		text-decoration: underline;
	}
`

const AnchorLink = styled.a`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 15px;
  font-size: 13px;
	&:hover {
		text-decoration: underline;
	}
`
