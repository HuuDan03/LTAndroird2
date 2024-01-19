// ThongBao.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ThongBao = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route.params && route.params.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params]);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const formatCurrency = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông Tin Hóa Đơn</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name} x{item.quantity}</Text>
            <Text>{formatCurrency(item.price * item.quantity)} VNĐ</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.total}>Tổng cộng: {formatCurrency(calculateTotalPrice(cartItems))} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ThongBao;
