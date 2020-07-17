/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Navigation } from './src/navigations/Navigation';
import { Stack } from './src/navigations/Stack';
import { Footer } from './src/views/Footer';
import { Mypage } from './src/views/Mypage';
import { ViewPage, AuthNavProps } from './src/types';
import { LeftHeader, RightHeader } from './src/views/Home/header';
import { DirectMessage } from './src/views/DirectMessage';

const App: React.FC = () => {
  const handleRightPress = (navProps: AuthNavProps<ViewPage.Home>) => {
    navProps.navigation.navigate(ViewPage.DirectMessage);
  };
  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen
          name={ViewPage.Home}
          component={Footer}
          options={(navProps: AuthNavProps<ViewPage.Home>) => ({
            title: 'Realstagram',
            headerLeft: () => <LeftHeader />,
            headerRight: () => <RightHeader onPress={() => handleRightPress(navProps)} />
          })}
        />
        <Stack.Screen name={ViewPage.Mypage} component={Mypage} />
        <Stack.Screen
          name={ViewPage.DirectMessage}
          component={DirectMessage}
          options={{ title: 'Direct' }}
        />
      </Stack.Navigator>
    </Navigation>
  );
};

export default App;
