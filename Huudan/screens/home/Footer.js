import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,} from 'react-native';

const Footer = (onPressCart) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onPressCart}>
        <Image
          style={styles.cartIcon}
          source={require('../../assets/images/cart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0', // Màu nền của footer
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#333', // Màu chữ của footer
  },
  cartIcon:{
    width: 40,
    height: 40,
    right: 100,
  },
});

export default Footer;
