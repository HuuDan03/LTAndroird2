import Header from './Header.js';
import Footer from './Footer.js';
import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import SlideShow from './SlideShow.js';



const anh = [
];
export default function TrangChu({ navigation }) {
  const [fashion, setFashion] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const getAPI = () => {
    return fetch(`https://659fac0d5023b02bfe8a2647.mockapi.io/db_android`)
      .then((response) => response.json())
      .then((data) => setFashion(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAPI();
  }, []);

  const renderItem = ({ item }) => (
    
    <TouchableOpacity
    onPress={() => navigation.navigate('Chitiet', { item,cartItems, setCartItems, })}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemTextPrice}>{item.price}$</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Sản phẩm đã được thêm vào giỏ hàng</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeModalText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
       // Hiển thị thông báo thành công
    
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
      // Hiển thị thông báo thành công
   
    }
    toggleModal();
  };

  const handlePressCart = () => {
    navigation.navigate('GioHang', { cartItems, setCartItems });
  };

  return (
    <View style={styles.trangchu}>
    
      <Header onPressCart={handlePressCart} onSearch={(searchText) => console.log(searchText)} />
      {/* <SlideShow/> */}
      <Image
        style={styles.banner}
        source={require('../../assets/images/banner.jpg')}
      />
 
      <Text style={styles.title}>Sản phẩm
      </Text>
 
      <FlatList
        data={fashion}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}  // Cho phép cuộn
      />
        {/* <Footer/> */}
   
    </View>
  );
}
const styles = StyleSheet.create({
  trangchu: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
 
  },
  banner: {
    width: 380,
    height: 200,
  
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  addToCartButtonText:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    marginRight: 5,
    backgroundColor: "pink",
    borderColor: "pink",
  },
  itemTextPrice:{
    color: 'green',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeModalText: {
    color: '#3498db',
    textAlign: 'center',
  },
});
