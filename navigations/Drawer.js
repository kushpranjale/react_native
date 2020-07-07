import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import MyPage from '../screens/MyPage';
import Setting from '../screens/Setting';
import {Text, Button, Icon} from 'native-base';
import {DrawerActions} from '@react-navigation/native';
import {Input, Image} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const stack = createStackNavigator();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button
              style={{padding: 1, marginHorizontal: 1}}
              transparent
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon type="FontAwesome" name="bars" style={{color: 'black'}} />
            </Button>
          ),
        }}>
        <stack.Screen name="MyPage">
          {props => <MyPage {...props} />}
        </stack.Screen>
        <stack.Screen name="Setting">
          {props => <Setting {...props} />}
        </stack.Screen>
      </stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{margin: 10}}>
        <View>
          <Image
            style={{
              height: 40,
              width: 100,
              borderRadius: 30,
              scale: 0.5,
              marginTop: 30,
            }}
            source={require('../assest/digiowner-logo.png')}
            resizeMode="stretch"
          />
          <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white'}}>
            Welcome To DigiOwner
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginLeft: -10,
            marginTop: 15,
            alignSelf: 'stretch',
          }}
        />
        <DrawerItem
          style={styles.drawerItem}
          labelStyle={styles.drawerLabel}
          label="MyPage"
          labelStyle={{marginLeft: -16, color: 'white', fontSize: 16}}
          onPress={() => props.navigation.navigate('MyPage')}
          icon={() => (
            <Icon
              type="FontAwesome"
              name="star"
              style={{color: 'white', fontSize: 16}}
            />
          )}
        />
        <DrawerItem
          labelStyle={styles.drawerLabel}
          style={styles.drawerItem}
          label="Setting"
          labelStyle={{marginLeft: -16, color: 'white', fontSize: 16}}
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => (
            <Icon
              type="FontAwesome"
              name="wrench"
              style={{color: 'white', fontSize: 16}}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default () => {
  // const [progress, setProgress] = React.useState(new Animated.Value(0));

  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  // return (
  //   <Drawer.Navigator
  //     initialRouteName="Home"
  //     drawerContent={props => {
  //       setProgress(props.progress);
  //       return <DrawerContent {...props} />;
  //     }}>
  //     <Drawer.Screen name="Screens">
  //       {props => <Screens {...props} style={animatedStyle} />}{' '}
  //     </Drawer.Screen>
  //   </Drawer.Navigator>
  // );
  return (
    <LinearGradient style={{flex: 1}} colors={['#ff9966', '#ff5e62']}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},

  drawerLabel: {color: 'white', marginLeft: -16},
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
// export default Drawers;
