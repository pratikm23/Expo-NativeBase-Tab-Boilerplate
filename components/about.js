//Imports.
import {Container,Content,Header, Title, Button, Icon} from 'native-base';
import React from 'react';
import { TouchableHighlight,AppRegistry, StatusBar, StyleSheet ,View,Text,TouchableOpacity} from 'react-native';
import { Font,Constants } from 'expo';
import {styles} from '../styles/styles';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
  SlidingTabNavigation,
  SlidingTabNavigationItem,
  NavigationStyles
} from '@expo/ex-navigation';
/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in TabScreen below
  */
const Router = createRouter(() => ({
  tab: () => TabScreen,
  tabOne: () => FirstTab,
  home: () => HomeScreen,
  about: () => AboutScreen,
}));


export class AboutScreen extends React.Component {
 static route = {
    navigationBar: {
      title: 'About',
    },
    styles: {
      ...NavigationStyles.SlideVertical,
    }
  }

  render() {
    return (
      <View>
        <Text>The app sample was developed by Pratik Mehta.{"\n"}
              Email : pratikm23@gmail.com
        </Text>
        <Button onPress={this._goBackHome}>
          <Text style={styles.textColor}>
            <Icon name='home' />
            Go back home
          </Text>
        </Button>
      </View>
    )
  }

  _goBackHome = () => {
    this.props.navigator.pop();
  }
}
