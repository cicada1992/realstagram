import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components';
import { ViewPage, AuthNavProps } from '../../types';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const ScrollViewContainer = styled(ScrollView)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const Body = styled(View)`
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;

const Title = styled(Text)`
  font-size: 40px;
`;

interface Props extends AuthNavProps<ViewPage.Home> {}

export const Home: React.FC<Props> = () => {
  return (
    <Container>
      <ScrollViewContainer contentInsetAdjustmentBehavior="automatic">
        <Body>
          <View>
            <Title>Realstagram</Title>
          </View>
        </Body>
      </ScrollViewContainer>
    </Container>
  );
};
