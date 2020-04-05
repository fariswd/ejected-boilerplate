import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Container, Text as TextBase, Button } from "native-base";
import { useDispatch } from 'react-redux'

import { login } from '../actions/userActions'

export default () => {
  const dispatch = useDispatch()
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    }}>
      <Button block onPress={() => dispatch(login())}>
        <TextBase>REGISTER</TextBase>
      </Button>
    </View>
  )
}