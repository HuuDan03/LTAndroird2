import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    if (email) {
      try {
        // Lấy danh sách tài khoản đã đăng ký từ AsyncStorage
        const existingAccountsString = await AsyncStorage.getItem('accounts');
        const existingAccounts = existingAccountsString ? JSON.parse(existingAccountsString) : [];

        // Kiểm tra xem email có tồn tại trong danh sách tài khoản không
        const isEmailExist = existingAccounts.some((account) => account.email === email);

        if (isEmailExist) {
          // Thực hiện logic gửi email đặt lại mật khẩu (ví dụ: gửi mã xác nhận)
          // Ở đây, bạn có thể sử dụng thư viện gửi email hoặc gọi API đặt lại mật khẩu

          // Chuyển hướng người dùng đến màn hình nhập mã xác nhận
          navigation.navigate('ResetPasswordConfirmation', { email });
        } else {
          alert('Email không tồn tại trong hệ thống.');
        }
      } catch (error) {
        console.error('Lỗi khi xử lý quên mật khẩu:', error);
        alert('Đã xảy ra lỗi khi xử lý quên mật khẩu. Vui lòng thử lại.');
      }
    } else {
      alert('Vui lòng nhập địa chỉ email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên Mật Khẩu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Gửi Yêu Cầu</Text>
      </TouchableOpacity>
    </View>
  );                              
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
