import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Mypage: React.FC = () => {
  return (
    <Container>
      <Text>Mypage</Text>
    </Container>
  );
};
