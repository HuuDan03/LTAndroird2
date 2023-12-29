import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Chitiet = ({ route }) => {
  const { item, cartItems, setCartItems } = route.params;

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <View style={styles.chitiet}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Text style={styles.cartItemsText}>Items in Cart: {cartItems.length}</Text>
      {cartItems.map((cartItem) => (
        <View key={cartItem.id}>
          <Image source={cartItem.source} style={styles.cartItemImage} />
          <Text>{cartItem.name}</Text>
          <Text>Quantity: {cartItem.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chitiet: {
    // Thêm kiểu dáng cho trang chi tiết
  },
  image: {
    // Thêm kiểu dáng cho hình ảnh sản phẩm
  },
  itemText: {
    // Thêm kiểu dáng cho thông tin sản phẩm
  },
  addToCartButton: {
    // Thêm kiểu dáng cho nút "Add to Cart"
  },
  addToCartButtonText: {
    // Thêm kiểu dáng cho văn bản nút "Add to Cart"
  },
  cartItemsText: {
    // Thêm kiểu dáng cho văn bản hiển thị số lượng sản phẩm trong giỏ hàng
  },
  cartItemImage: {
    // Thêm kiểu dáng cho hình ảnh sản phẩm trong giỏ hàng
  },
});

export default Chitiet;
