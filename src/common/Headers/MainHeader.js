import { useContext } from 'react';
import { AuthenticationContext } from "../../context/AuthContext";
import {  View   , TouchableOpacity , Image, StyleSheet  } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS, FONTSIZE } from '../../config/theme/theme';
import Entypo from '@expo/vector-icons/Entypo';


export  const MainHeader = ({ navigation }) => {
    
  
    return (
      <View  style={{ paddingHorizontal: 15 , backgroundColor: COLORS.BlackTheme }} >
   <View className="flex flex-row items-center justify-between pt-16 k pb-2" style={{ backgroundColor: COLORS.BlackTheme }} >

   <TouchableOpacity  onPress={() => {
        navigation.toggleDrawer();
      }}  >
        
      <Entypo
         name="menu"
         color={COLORS.PrimaryColor}
         size={FONTSIZE.size_24}
       />
      </TouchableOpacity>

      <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />

          <View>
          <TouchableOpacity  onPress={() => {
        navigation.navigate('UserAccountScreen');
        }}  >
        <AntDesign
        name="user"
        color={COLORS.PrimaryColor}
        size={FONTSIZE.size_24}
        />
  
        </TouchableOpacity>
          </View>
     
      </View>
  
      </View>
     
    );
  };

  const styles = StyleSheet.create({
    logo: {
        resizeMode: 'cover',
        maxHeight: 50,
        maxWidth: 40,
      },
  })