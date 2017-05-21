//Imports.
import {Container,Content,Header, Title, Button, Icon} from 'native-base';
import React from 'react';
import { TouchableHighlight,AppRegistry, StatusBar, StyleSheet ,View,Text,TouchableOpacity} from 'react-native';
import { Font,Constants } from 'expo';

import {styles} from './styles/styles';
import {FirstTab} from './components/FirstTab';
import {SecondTab} from './components/secondTab';
import {AboutScreen} from './components/about';

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

import { Ionicons } from '@expo/vector-icons';

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in TabScreen below
  */
const Router = createRouter(() => ({
  tab: () => TabScreen,
  tabOne: () => FirstTab,
  tabTwo: () => SecondTab,
  home: () => HomeScreen,
  about: () => AboutScreen
}));

export default class App extends React.Component {
  render() {
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screens, you can
      * think of a stack like a stack of playing cards, and each time
      * you add a screen it slides in on top. Stacks can contain
      * other stacks, for example if you have a tab bar, each of the
      * tabs has its own individual stack. This is where the playing
      * card analogy falls apart, but it's still useful when thinking
      * of individual stacks.
      */
    return (
      <NavigationProvider router={Router}>
        <StackNavigation defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#000',
              tintColor: '#fff',
            }
          }} initialRoute={Router.getRoute('tab')} />
      </NavigationProvider> 
    );
  }
}

class TabScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
    constructor(props) {
        super(props);
    }
   static route = {
    navigationBar: {
      title : 'Home'
    },
    styles: {
      ...NavigationStyles.SlideVertical,
    }
  }

  //Programmatically switch tabs : 
   _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('first');
    });
  };

 _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('sliding-tab-navigation').jumpToTab('second');
    });
  };
 
 static _goToAbout = () => {
     this.props.navigator.push(Router.getRoute('about'));
  }
 _renderLabel = ({ route }) => {
    let title;
    if (route.key === 'first') {
      title = 'First';
    } else if (route.key === 'second') {
      title = 'Second';
    }

    return <Text style={styles.tabLabel}>{title.toUpperCase()}</Text>;
  };


  render() {
    return (
     <View style={styles.container}>
        <SlidingTabNavigation
          id="sliding-tab-navigation"
          navigatorUID="sliding-tab-navigation"
          initialTab="first"
          renderLabel={this._renderLabel}
          barBackgroundColor="#0084FF"
          indicatorStyle={styles.tabIndicator}>
          <SlidingTabNavigationItem id="first">
              <FirstTab parentNavigator={this.props.navigator} />
          </SlidingTabNavigationItem>
          <SlidingTabNavigationItem id="second">
            <SecondTab parentNavigator={this.props.navigator} />
          </SlidingTabNavigationItem>
        </SlidingTabNavigation>
      </View>
             
    )
  }
}


AppRegistry.registerComponent('main', () => App);
