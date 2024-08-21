import React from 'react';
import {category} from '../data/category';
import {colors} from '../constants/Colors';
import {fontFamily} from '../constants/Fonts';
import {fontSize, spacing} from '../constants/Dimensions';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Category = ({selectedCategory, handleUpdateCategory}) => {
  return (
    <FlatList
      data={category}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            handleUpdateCategory(item.name);
          }}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {
                color: colors.purple,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={{paddingHorizontal: spacing.sm}} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.sm,
  },
});
