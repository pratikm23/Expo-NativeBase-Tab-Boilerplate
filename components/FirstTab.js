//Imports.
import {Container,Content,Header, Title, Button, Icon} from 'native-base';
import React from 'react';
import { TouchableHighlight,AppRegistry, StatusBar, StyleSheet ,View,Text,TouchableOpacity} from 'react-native';
import { Font,Constants } from 'expo';
import {styles} from '../styles/styles';
import {AboutScreen} from './about';
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
export class FirstTab extends React.Component {
 constructor(props) {
        super(props);
        this.parentProps = props;
  }
  render() {
    return (
        <View>

            <Text>Welcome to the first tab!</Text>
            <Button activeOpacity={0.6}  underlayColor={'white'}
              onPress={this._goToAbout}>

              <Text style={styles.textColor}>About the app.</Text>
            </Button>
          
        </View>
      
    )
  }
  _goToAbout = () => {
     this.parentProps.parentNavigator.push(Router.getRoute('about'));
  }
}