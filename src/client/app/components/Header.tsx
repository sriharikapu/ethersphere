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
        <Link to="/add">Add block</Link>
        <Link to="/manage">Manage</Link>
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
