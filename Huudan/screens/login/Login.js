import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Nhập đúng

const Login = () => {
  const navigation = useNavigation(); // Sử dụng đúng

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('TrangChu')
      // Bạn có thể thực hiện xác thực ở đây (gửi thông tin đăng nhập đến máy chủ, v.v.)
      alert(`Login với Tên người dùng: ${username} và Mật khẩu: ${password}`);
     // Điều hướng đúng
    } else {
      alert('Vui lòng nhập cả tên người dùng và mật khẩu.');
    }
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
    return (
      <View style={styles.home}>
       {/* <Image
        style={styles.Logo}
        source={require('../../public/images/logo.png')}
      /> */}
        <Text style={styles.title}>Login to Your Account</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
  
        <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button}onPress={handleLogin} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Sign up</Text>
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
      left: 150,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    forgotPassword: {
      width: 150,
      left: 100,
      
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
      bottom:-10,
     
    },
    button1: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 20,
      width: 350,
      height: 50,
      bottom: -20,
     
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Login;

