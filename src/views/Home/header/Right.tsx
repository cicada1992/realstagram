import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  margin-right: 20px;
`;

interface Props {
  onPress: () => void;
}

export const RightHeader: React.FC<Props> = ({ onPress }) => {
  return (
    <Container onTouchEnd={onPress}>
      <Text>DM</Text>
    </Container>
  );
};
