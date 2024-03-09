import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../config/theme/theme';

const SubMovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_4}
              : props.isLast
              ? {marginRight: SPACING.space_4}
              : {}
            : {},
          props.shouldMarginatedAround ? {margin: SPACING.space_4} : {},
          {maxWidth: props.cardWidth},
        ]}>

        <Image
          style={[styles.cardImage, {width: props.cardWidth}]}
          source={{uri: props.imagePath}}
        />

        <Text numberOfLines={1} style={styles.textTitle}>
          {props.title}
        </Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginHorizontal: 5,
  },
  cardImage: {
    aspectRatio: 1 / 3,
    borderRadius: BORDERRADIUS.radius_4,
  },
  textTitle: {
    fontFamily: FONTFAMILY.secondary,
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteColor,
    textAlign: 'center',
    paddingVertical: SPACING.space_4,
  },
});

export default SubMovieCard;
