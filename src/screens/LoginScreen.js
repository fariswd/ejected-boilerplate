import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import { Container, Text as TextBase, Button } from "native-base";
import { useDispatch, useSelector } from 'react-redux'
import { getFormValues } from 'redux-form'

import { login } from '../actions/userActions'
import LoginForm from '../components/LoginForm'

export default (props) => {
  const dispatch = useDispatch()
  const values = useSelector(state => getFormValues('LoginForm')(state) || {},)
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 200,
        }}
      >
        <Image
          source={
            __DEV__
              ? require("../assets/images/robot-dev.png")
              : require("../assets/images/robot-prod.png")
          }
          style={{
            width: 100,
            height: 80,
            resizeMode: "contain",
            marginTop: 3,
          }}
        />
        <View style={{ paddingTop: 50 }} />
        <View style={{ flexDirection: "row" }}>
          <LoginForm />
        </View>
        <View style={{ paddingTop: 10 }} />
        <Text>login as: {values.userid}</Text>
        <View style={{ paddingTop: 10 }} />
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ width: 100, justifyContent: "center" }}
            onPress={() => dispatch(login())}
          >
            <TextBase>Login</TextBase>
          </Button>
          <View style={{ marginLeft: 5 }} />
          <Button
            bordered
            style={{ width: 100, justifyContent: "center" }}
            onPress={() => props.navigation.navigate("Register")}
          >
            <TextBase style={{ color: "#555" }}>Register</TextBase>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}