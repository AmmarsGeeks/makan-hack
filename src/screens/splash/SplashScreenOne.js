import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS, FONTFAMILY } from '../../config/theme/theme';

const SplashScreenOne = ( {navigation}) => {

  return (
    <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]} className="mx-4" >
       <StatusBar barStyle={'light-content'} />
      <View style={styles.textContainer}>
        <Image source={require('../../assets/images/splash-one.png')}   />

        <Text style={styles.subtitle}>
          العثور على مكان كتابك أصبح أسهل , نوفر حل تقني مكتامل للمكتبات
        </Text>



        <TouchableOpacity className=" w-96 mt-5 flex items-center  rounded-lg" style={styles.bgPrimary} onPress={() => navigation.navigate('SplashScreenTwo') } >
        <Text className="text-white text-lg py-3" style={styles.font} >التالي</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WhiteColor,
    flex: 1,
    paddingHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
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
    fontFamily: FONTFAMILY.primary,
    fontSize: 18,
    color: COLORS.BlackColor,
    marginTop: 35,
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
  bgPrimary: {
    backgroundColor: COLORS.PrimaryColor,
  },
  font: {
    fontFamily: FONTFAMILY.primary,
  }

});

export default SplashScreenOne;