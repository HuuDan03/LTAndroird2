// ThongTinTaiKhoan.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThongTinTaiKhoan = ({ route }) => {
    // Kiểm tra xem route.params có tồn tại không
    if (!route.params) {
      // Xử lý trường hợp không có thông tin tài khoản
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Không có thông tin tài khoản.</Text>
        </View>
      );
    }
  
    // Lấy thông tin tài khoản từ route.params
    const { username, email } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thông Tin Tài Khoản</Text>
        <Text style={styles.info}>Tên Người Dùng: {username}</Text>
        <Text style={styles.info}>Email: {email}</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ThongTinTaiKhoan;
