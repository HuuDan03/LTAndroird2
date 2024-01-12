import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (username && password) {
      // Lưu thông tin người dùng đã đăng ký vào AsyncStorage
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      // Thực hiện đăng nhập tự động
      handleLogin();
    } else {
      alert('Vui lòng nhập cả tên người dùng và mật khẩu.');
    }
  };

  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    const storedPassword = await AsyncStorage.getItem('password');

    if (storedUsername && storedPassword) {
      // Thực hiện logic đăng nhập (ví dụ: kiểm tra thông tin với máy chủ)
      alert(`Đăng ký với Tên người dùng: ${storedUsername} và Mật khẩu: ${storedPassword}`);
      navigation.navigate('Login'); // Điều hướng
    } else {
      alert('Không thể đăng nhập tự động. Vui lòng đăng nhập bằng tên người dùng và mật khẩu.');
    }
  };

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.home}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo/logo.png')}
      />
      <Text style={styles.title}>Tạo Tài Khoản</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={handleLoginRedirect}>
        <Text style={styles.buttonText}>Quay lại Đăng nhập</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: 350,
    height: 50,
    bottom: -10,
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: 350,
    height: 50,
    bottom: -20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUp;
