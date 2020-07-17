import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  margin-left: 20px;
`;

export const LeftHeader: React.FC = () => {
  return (
    <Container>
      <Text>Left</Text>
    </Container>
  );
};
