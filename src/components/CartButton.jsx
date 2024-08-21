import React from 'react';
import {colors} from '../constants/Colors';
import {fontFamily} from '../constants/Fonts';
import {fontSize, iconSize, spacing} from '../constants/Dimensions';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View colors={'#4136F1'} style={styles.addToCartButton}>
        <View
          name={'cart-outline'}
          color={colors.background}
          size={iconSize.md}
        />
        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  addToCartButton: {
    width: '90%',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: spacing.md,
    gap: spacing.sm,
  },
  addToCartText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
});
