
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewPassword = ({ route, navigation }) => {
  const { email } = route.params;
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    if (password) {
      try {
        // Lấy danh sách tài khoản đã đăng ký từ AsyncStorage
        const existingAccountsString = await AsyncStorage.getItem('accounts');
        const existingAccounts = existingAccountsString ? JSON.parse(existingAccountsString) : [];

        // Cập nhật mật khẩu mới trong danh sách tài khoản
        const updatedAccounts = existingAccounts.map((account) =>
          account.email === email ? { ...account, password } : account
        );

        // Lưu lại danh sách tài khoản đã cập nhật vào AsyncStorage
        await AsyncStorage.setItem('accounts', JSON.stringify(updatedAccounts));

        alert('Đặt lại mật khẩu thành công. Đăng nhập với mật khẩu mới.');
        navigation.navigate('Login');
      } catch (error) {
        console.error('Lỗi khi đặt lại mật khẩu mới:', error);
        alert('Đã xảy ra lỗi khi đặt lại mật khẩu mới. Vui lòng thử lại.');
      }
    } else {
      alert('Vui lòng nhập mật khẩu mới.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đặt Lại Mật Khẩu Mới</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập Mật Khẩu Mới"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Xác Nhận</Text>
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

export default NewPassword;
