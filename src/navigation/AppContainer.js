import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { connect } from 'react-redux'

import BottomTabNavigator from '../navigation/BottomTabNavigator';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

@connect(state => ({
  user: state.user
}))
export default class AppContainer extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    const isLogin = this.props.user.isLogin
    return (
      <NavigationContainer
        ref={this.props.containerRef}
        initialState={this.props.initialNavigationState}
      >
        <Stack.Navigator
          screenOptions={() => ({
            ...TransitionPresets.SlideFromRightIOS,
          })}
        >
          {!isLogin ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={() => ({
                  headerShown: false,
                  ...TransitionPresets.DefaultTransition,
                })}
              />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}