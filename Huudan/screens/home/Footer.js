import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Trong Footer.js
const Footer = ({ navigation }) => {
  const handleViewInvoice = () => {
    // Chuyển trang đến màn hình thông báo
    navigation.navigate('ThongBao');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleViewInvoice}>
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
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
});

export default Footer;
