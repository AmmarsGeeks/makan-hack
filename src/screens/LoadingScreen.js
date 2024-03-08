import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTFAMILY } from '../config/theme/theme';
import { useFocusEffect } from '@react-navigation/native';

const LoadingScreen = ( {navigation}) => {

  useFocusEffect(
    useCallback(() => {
     setTimeout(() => {
      navigation.navigate('SplashScreenOne')
     } , 2500)
    }, [])
  );

  return (
    <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
       <StatusBar barStyle={'light-content'} />
      <View style={styles.textContainer}>
        <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WhiteColor,
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'cover',
    maxHeight: 300,
    maxWidth: 250,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY.primary_bold,
    color: 'white',
    marginTop: 25,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTFAMILY.primary_light,
    fontSize: 18,
    color: 'white',
    marginTop: 25,
    textAlign: 'center',
  },
  button: {
    marginTop: 55,
    borderRadius: 5,
    marginBottom: 20,
    width: 220,
    backgroundColor: COLORS.PrimaryColor,
  },
  buttonText: {
    fontFamily: FONTFAMILY.primary_bold,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default LoadingScreen;