import {  View , Text  , TouchableOpacity  , StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS , FONTFAMILY } from '../../config/theme/theme';

export const HeaderScreenGoBack = ({ navigation , title   }) => {
    return (
      <View  style={{ paddingHorizontal: 35 , backgroundColor:COLORS.PrimaryColor }} >
   <View className="flex flex-row justify-end pt-24 pb-2" >
         
   <View>
      <Text className="text-xl text-white text-left" style={[styles.font ]} >  {title}  </Text>  
      </View>

   <TouchableOpacity  onPress={() => {
        navigation.goBack();
      }}  >
       <Feather name="chevron-right" size={24} color={COLORS.WhiteColor} />
      </TouchableOpacity>

    
     
      </View>

      </View>
     
    );
  }

  const styles = StyleSheet.create({
    font: {
      fontWeight: 'bold',
      fontFamily: FONTFAMILY.secondary,
      textAlign: 'left'
    },
    
  });