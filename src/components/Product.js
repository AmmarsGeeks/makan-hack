import { View, Text  , StyleSheet , Image , TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useState , useEffect , useContext } from 'react';
import { FONTFAMILY , COLORS, BORDERRADIUS } from '../theme/theme';
// import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../context/AppContext';
import {getDocs  , collection , db } from '../../firebase';

const Product = ( {id , title  , rating , price_per , category , image , navigation} ) => {

  const [user, setUser] = useState(null);
  const {addToFavourite} = useContext(AppContext);


      
 
  return (
    <TouchableOpacity className="w-72" key={id} onPress={() => navigation.navigate('SingleProductScreen' , {
      productId : id
    }) } >

  <View style={styles.containerSlider}  className="mt-5" >

<View className="relative m-3 block overflow-hidden rounded-xl   "  style={styles.eventCard} >
      <Image className="h-56 w-full object-cover" source={ { uri: image }}  resizeMode="cover" style={styles.productImage} />
    
        <View className="flex items-start" >
        <Text className="text-lg text-right mt-3 mx-2" style={styles.productTitle} > 
            {title} 
         </Text>
        </View>

      <View className="absolute top-5 left-5 px-4 " style={styles.categoryProduct} >
        <Text style={styles.categoryProductTitle} > {category} </Text>
      </View>


   
      <View className="flex-row justify-between mt-3" style={{      paddingHorizontal: 10,
      paddingVertical: 15}}  >
       
        <View>
          <Text className="text-sm" style={styles.productPrice} >  يوم \ {price_per} ر.س </Text>
        </View>
       
        <View className="flex-row" >
          <FontAwesome name="star" size={22} color="#FFD700" />
          <Text className="text-sm font-bold mx-1" > {randomValue} </Text>
        </View>
      </View>
    </View>

</View>
    </TouchableOpacity>
  
  )
}

const styles  = StyleSheet.create({ 

    productTitle: {
        fontFamily: FONTFAMILY.font_regular,
        fontWeight: 200,
      },
      productPrice: {
        fontFamily: FONTFAMILY.font_bold,
        fontWeight: 'bold',
        color: COLORS.Blue,
        textAlign: 'left'
      },
      categoryProduct: {
        backgroundColor: COLORS.LightBLue,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
        color: COLORS.White
      },
      categoryProductTitle: { 
        color: COLORS.White,
        fontFamily: FONTFAMILY.font_bold,
        fontWeight: 400,
        fontSize: 13,
      },
      categoryLove: {
        backgroundColor: COLORS.Green,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 25,
      },
      categoryLoved: {
        backgroundColor: '#FFFAF5',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 25,
      },
      eventCard: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#e9e9e1',
        borderRadius: BORDERRADIUS.radius_25,
    },
} )

export default Product