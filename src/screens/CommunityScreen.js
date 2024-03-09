import React from 'react';
import { View, Image, StyleSheet  , Text} from 'react-native';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
     <Text> Coming soon </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Full width
    height: '100%', // Full height
  },
});

export default CommunityScreen;