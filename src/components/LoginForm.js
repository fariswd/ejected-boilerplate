import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { getFormValues, Field, reduxForm } from "redux-form";

import ReduxFormTextInput from '../components/ReduxFormTextInput'

@connect(state => ({
  values: getFormValues('LoginForm')(state) || {},
}))
class LoginForm extends React.Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <Field
          name="userid"
          returnKeyType={"done"}
          placeholder="userid"
          style={[styles.input]}
          onChange2={(text) => console.log('userid:', text)}
          component={ReduxFormTextInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: '#666',
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 14
  },
});

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);