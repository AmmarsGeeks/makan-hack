import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { useState  , useCallback} from 'react';
import SearchBar from '../components/SearchBar'
import { COLORS, SPACING } from '../config/theme/theme'
import CategoryHeader from '../components/CategoryHeader';
import { useFocusEffect } from '@react-navigation/native';
import {  query , collection , getDocs , db } from "../config/firebase/firebase";
import SubMovieCard from '../components/SubMovieCard';
import { DrawerActions } from '@react-navigation/native';
import MovieCard from '../components/MovieCard';
const {width, height} = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = ({ navigation }) => {

  const [allBookslist, setAllBooks] = useState(null);
  const [isLoading , setIsLoading] = useState();
  const [error , setError] = useState();

  const getEventsData = async () => {
    try {
      setIsLoading(true);
      const q = query(collection(db, "books"));
      const querySnapshot = await getDocs(q);
      const eventData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("threst")
      setAllBooks(eventData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  useFocusEffect(
    useCallback(() => {
      getEventsData();
    }, [])
  );

  if (
    allBookslist == undefined &&
    allBookslist == null 
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.DarkGreen} />
        </View>
      </ScrollView>
    );
  }

  return (

    <ScrollView style={styles.container} bounces={false}>

    <StatusBar barStyle={'light-content'} />
    <View style={styles.container} >
     
     <View className="mt-2" >
     <SearchBar navigation={navigation} placeholder={"بحث"} icon={"search"} />
     </View>

     <View className="mt-2" >
     <CategoryHeader title={'مكتبتي'} postion={'left'}  />
     <View style={styles.underline}  />
     </View>

     <View style={styles.dirR} className="mt-2" >
    <FlatList
    horizontal
    data={[...allBookslist]}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={styles.containerGap16}
    renderItem={({item, index}) => (
    <SubMovieCard
      shoudlMarginatedAtEnd={true}
      cardFunction={() => {
        navigation.dispatch(
          DrawerActions.jumpTo('EventDetailScreen', {movieid: item.id}));
      }}
      cardWidth={width / 5.5}
      isFirst={index == 0 ? true : false}
      title={item.name}
      imagePath={item.image}
      style={{margin: 2}} 
        />
      )}
    />

     </View>

     <View className="mt-1" >
     <CategoryHeader title={'قد يهمك'} postion={'left'}  />
     <View style={styles.underline}  />
     </View>

     <View style={styles.dirR} className="mt-2" >
    <FlatList
    horizontal
    data={[...allBookslist]}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={styles.containerGap16}
    renderItem={({item, index}) => (
    <SubMovieCard
      shoudlMarginatedAtEnd={true}
      cardFunction={() => {
        navigation.dispatch(
          DrawerActions.jumpTo('EventDetailScreen', {movieid: item.id}));
      }}
      cardWidth={width / 5.5}
      isFirst={index == 0 ? true : false}
      title={item.name}
      imagePath={item.image}
      style={{margin: 2}} 
        />
      )}
    />
     </View>

     <View className="mt-1" >
     <CategoryHeader title={'الأعلى تفاعل'} postion={'left'}  />
     <View style={styles.underline}  />
     </View>

     <View style={styles.dirR} className="mt-2" >
    <FlatList
    horizontal
    data={[...allBookslist]}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={styles.containerGap16}
    renderItem={({item, index}) => (
    <SubMovieCard
      shoudlMarginatedAtEnd={true}
      cardFunction={() => {
        navigation.dispatch(
          DrawerActions.jumpTo('EventDetailScreen', {movieid: item.id}));
      }}
      cardWidth={width / 5.5}
      isFirst={index == 0 ? true : false}
      title={item.name}
      imagePath={item.image}
      style={{margin: 2}} 
        />
      )}
    />
     </View>

    </View>

      </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  container: {
     backgroundColor: COLORS.WhiteColor,
     height: '100%',
     direction: 'rtl',
     paddingHorizontal: 16,
     paddingBottom: 20,
     felx:1,
  },
  dirR: {
    direction: 'ltr'
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_36,
  },
  containerGap36: {
    gap: SPACING.space_36,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 50,
  },
  containerGap16: {
    gap: SPACING.space_4,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 10,
  },
  underline: {
    width: '100%', 
    borderBottomWidth: 1, 
    borderBottomColor: 'black', 
  },
 
 });
 

export default HomeScreen