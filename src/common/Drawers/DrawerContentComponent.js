import React from 'react'
import { SafeAreaView , View , Text  , TouchableOpacity , Image, StyleSheet  } from 'react-native';
import CustomDrawerItemList from './CustomDrawerItemList';
import {COLORS , FONTSIZE , BORDERRADIUS, FONTFAMILY} from '../../config/theme/theme';
import SettingComponentDrawer from "../../components/SettingComponentDrawer";
import { useNavigation } from '@react-navigation/native';

export const DrawerContentComponent = ({ props }) => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>

          <View 
          style={{
               marginTop: 32,
               height: 190,
               width: '100%',
               justifyContent: "center",
               alignItems: "center",
               borderBottomColor: "#f4f4f4",
               borderBottomWidth: 1
             }}  
              >

 <Image source={require('../../assets/icons/logo.png')} style={styles.logo}  />

 
    </View>

       <View
    style={{
      marginTop: 15,
      borderBottomColor: '#f4f4f4',
      borderBottomWidth: 2,
      justifyContent: 'flex-start',
      color: 'white',
    }}
    >
   <CustomDrawerItemList {...props} />
 </View>

       {/* <View
   style={{
     marginTop: 15,
     justifyContent: 'flex-start',
     color: 'white',
   }}
 >
   <SettingComponentDrawer
     icon="comment-question-outline"
     heading="الاسئلة الشائعة"
     navigation={navigation}
     toNav={"FaqScreen"}
   />
    <SettingComponentDrawer
     icon="information-outline"
     heading="من نحن"
     navigation={navigation}
     toNav={"WhoWeAreScreen"}
   />


 </View> */}


     </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  logo: {
      resizeMode: 'cover',
      maxHeight: 90,
      maxWidth: 70,
    },
    buttonBorder: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: COLORS.PrimaryColor,
      borderRadius: BORDERRADIUS.radius_25,
      padding: 4
    },
    font: {
      fontFamily: FONTFAMILY.primary
    },
    fontTajwal: {
      fontFamily: FONTFAMILY.secondary,
      fontSize: FONTSIZE.size_16,
    },
    button: {
      backgroundColor: COLORS.PrimaryColor,
      borderRadius: BORDERRADIUS.radius_25,
    },
    buttonText: {
      fontFamily: FONTFAMILY.secondary_bold,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
})