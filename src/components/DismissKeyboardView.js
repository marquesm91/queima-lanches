import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAvoidingViewContainer, Container } from '../styles';

const DismissKeyboard = ({ children, ...props }) => (
  <KeyboardAvoidingViewContainer>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingViewContainer>
);

export default DismissKeyboard;