import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Headline>
        Own your block of the earth
      </Headline>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Headline = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  margin: 100px 0 10px;
`
