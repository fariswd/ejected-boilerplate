import React from "react";
import {
  TextInput,
  View,
} from "react-native";

export default ({
  style,
  placeholder,
  multiline,
  maxLength,
  onChange2 = () => {},
  defaultValue,
  autoCapitalize,
  validationMask,
  minHeight = 100,
  onBlur2,
  input: {
    onChange,
    onBlur,
    ...restInput
  },
  ...restProps
}) => {
  return <TextInput
    defaultValue={String(defaultValue)}
    style={style}
    maxLength={maxLength}
    autoCapitalize={!autoCapitalize ? "none" : autoCapitalize}
    onChangeText={(values) => {
      if (!onChange2(values)) {
        if(validationMask) {
          onChange(validationMask(values));
        } else {
          onChange(values);
        }
      }
    }}
    underlineColorAndroid="transparent"
    placeholder={placeholder}
    {...restInput}
    {...restProps}
    onBlur={(val) => {
      if (onBlur2) {
        onBlur2(val);
      }
      onBlur(val);
    }}
  />
};
