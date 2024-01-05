import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

  // Navigate to the Cart screen
  navigation.navigate('GioHang', { cartItems: cartItems });
};
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
      <Text style={styles.cartItemsText}>
  Items in Cart: {cartItems ? cartItems.length : 0}
</Text>
{cartItems &&
  cartItems.map((cartItem) => (
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
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addToCartButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  cartItemsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  cartItemContainer: {
    marginBottom: 20,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginBottom: 5,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemQuantity: {
    fontSize: 14,
  },
});

export default Chitiet;
