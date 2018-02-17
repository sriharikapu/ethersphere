import React from 'react';
import styled, { StyledFunction } from 'styled-components';

const container: StyledFunction<{ type: string; } & React.HTMLProps<HTMLDivElement>> = styled.div;

const Container = container`
  position: fixed;
  top: 70px;
  right: 10px;
  background: ${p => ({ SUCCESS: 'hsl(120, 34%, 48%)', ERROR: 'hsl(14, 98%, 39%)' })[p.type]};
  width: 250px;
  height: auto;
  padding: 20px;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 0px 3px 13px hsla(0, 0%, 0%, .2);
  font-weight: 500;
  color: white;
  font-size: 14px;
`;
const Title = styled.h2`
  margin: 0;
`;
const Message = styled.p`
  font-weight: 400;
  line-height: 1.4;
  font-size: 13px;
  margin: 5px 0 0px;
`;

interface Props {
  type?: 'SUCCESS' | 'ERROR';
  message: string;
  title: string;
}

export default function Toaster({
  type = 'SUCCESS',
  message,
  title
}: Props) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  )
}
