import React , {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BORDERRADIUS, COLORS, FONTFAMILY } from '../../config/theme/theme';


const SplashScreenTwo = ( {navigation}) => {

  const [activeBtn, setActiveBtn] = useState(null); // State to track active button

  const handleChooseEvent = (btnName) => {
    setActiveBtn(btnName); // Set the clicked button as active
  };

  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]} className="mx-4">
    <StatusBar barStyle={'light-content'} />
    <View style={styles.textContainer}>
      <Text style={styles.subtitle}>أنا مهتم بالكتب</Text>
      <View className="flex items-center justify-center">
        <TouchableOpacity
          style={[
            styles.buttonBorder,
            activeBtn === 'تطوير الذات' ? styles.activeButton : null
          ]}
          className="mt-5 text-white py-3 rounded-lg text-sm px-6 mb-2 w-9/12"
          onPress={() => handleChooseEvent('تطوير الذات')}>
          <Text style={[
            styles.buttonText,
            activeBtn === 'تطوير الذات' ? styles.activeText : null
            ]}>تطوير الذات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonBorder,
            activeBtn === 'علم النفس' ? styles.activeButton : null
          ]}
          className="mt-5 text-white py-3 rounded-lg text-sm px-6 mb-2 w-9/12"
          onPress={() => handleChooseEvent('علم النفس')}>
          <Text style={[
            styles.buttonText,
            activeBtn === 'علم النفس' ? styles.activeText : null
            ]}
            >علم النفس</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonBorder,
            activeBtn === 'العلوم الاجتماعية' ? styles.activeButton : null
          ]}
          className="mt-5 text-white py-3 rounded-lg text-sm px-6 mb-2 w-9/12"
          onPress={() => handleChooseEvent('العلوم الاجتماعية')}>
          <Text style={[
            styles.buttonText,
            activeBtn === 'العلوم الاجتماعية' ? styles.activeText : null
            ]}
            > العلوم الاجتماعية</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonBorder,
            activeBtn === 'العلوم الدينية' ? styles.activeButton : null
          ]}
          className="mt-5 text-white py-3 rounded-lg text-sm px-6 mb-2 w-9/12"
          onPress={() => handleChooseEvent('العلوم الدينية')}>
          <Text style={[
            styles.buttonText,
            activeBtn === 'العلوم الدينية' ? styles.activeText : null
            ]}
            > العلوم الدينية</Text>
        </TouchableOpacity>

     

      </View>
      <TouchableOpacity
        className="w-96 mt-5 flex items-center radius-lg"
        style={styles.bgPrimary}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text className="text-white text-lg py-3" style={styles.font}>التالي</Text>
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
    marginTop: 35,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: COLORS.PrimaryColor,
  },
  buttonText: {
    fontFamily: FONTFAMILY.primary,
    fontSize: 14,
    textAlign: 'center',
  },
  bgPrimary: {
    backgroundColor: COLORS.PrimaryColor,
  },
  font: {
    fontFamily: FONTFAMILY.primary,
  },
  buttonBorder: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.PrimaryColor,
    borderRadius: BORDERRADIUS.radius_25,

  },
  activeButton : {
    backgroundColor: COLORS.PrimaryColor,
  },
  activeText : {
    color: COLORS.WhiteColor
  }

});

export default SplashScreenTwo;