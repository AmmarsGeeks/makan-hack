import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../config/theme/theme';

const CategoryHeader = (props: any) => {
  return <Text style={styles.text} className={props.postion == "center" ? "text-center" : "text-left"} >{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    paddingTop: SPACING.space_20,
    paddingBottom: SPACING.space_2,
    fontFamily: FONTFAMILY.secondary,
    fontSize: FONTSIZE.size_20,
    color: COLORS.BlackColor,
    marginBottom: 10,
  
  },
});

export default CategoryHeader;
