import React from 'react';
import { BottomTab } from '../../navigations/BottomTab';
import { Home } from '../Home';
import { Mypage } from '../Mypage';

export const Footer: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Mypage" component={Mypage} />
    </BottomTab.Navigator>
  );
};
