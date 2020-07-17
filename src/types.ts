import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export enum ViewPage {
  Home = 'HOME',
  Mypage = 'MY_PAGE',
  Footer = 'FOOTER',
  DirectMessage = 'DIRECT_MESSAGE'
}

export type AuthParamList = {
  [ViewPage.Home]: undefined;
  [ViewPage.Mypage]: undefined;
  [ViewPage.Footer]: undefined;
  [ViewPage.DirectMessage]: undefined;
};

export interface AuthNavProps<T extends keyof AuthParamList> {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
}
