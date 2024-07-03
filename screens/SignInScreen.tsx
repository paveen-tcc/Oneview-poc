// Copyright (c) Microsoft.
// Licensed under the MIT license.

// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  /*Alert,*/ Button,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import image from './bg.png';

import {AuthContext} from '../AuthContext';
import {StackParamList} from '../App';
import {Dimensions} from 'react-native';
type SignInProps = StackScreenProps<StackParamList, 'SignIn'>;

export default class SignInScreen extends React.Component<SignInProps> {
  static contextType = AuthContext;
  declare context: React.ContextType<typeof AuthContext>;

  _signInAsync = async () => {
    await this.context.signIn();
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Please sign in',
      headerShown: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode='stretch'
          style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
          <TouchableOpacity onPress={this._signInAsync} style={styles.button}>
            <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:500}}>Sign In</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.title}>Oneview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    height: Dimensions.get('window').height + 14,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#005EEF',
    padding: 14,
    width: 200,
    marginTop: 650,
    borderRadius: 6,
  },
});
