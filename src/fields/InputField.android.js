'use strict';

import React from 'react';
import ReactNative from 'react-native';
import {InputComponent} from '../lib/InputComponent';

const {StyleSheet} = ReactNative;

export class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
  }
  handleValidation(isValid, validationErrors){
    this.valid = isValid;
    this.validationErrors = validationErrors;
  }
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  focus(){
    this.refs.fieldComponent.focus()
  }
  handleOnFocus(){
    this.setState({focused: true})
  }
  handleOnBlur(){
    this.setState({focused: false});
  }
  render(){
    return(<InputComponent
      {...this.props}
      ref='fieldComponent'
      onValidation={this.handleValidation.bind(this)}
      underlineColorAndroid={this.props.label ? this.state.focused ? '#175f95' : '#666' : 'transparent'}
      onFocus={this.handleOnFocus.bind(this)}
      onBlur={this.handleOnBlur.bind(this)}
      labelStyle={[this.props.labelStyle, {color: this.state.focused ? '#175f95' : '#666'}]}
      //onChange={this.handleChange.bind(this)}
      //ref={this.props.fieldRef}
      />
    );
  }
}
