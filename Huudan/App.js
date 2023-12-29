import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login/Login';
import TrangChu from './screens/home/TrangChu';
import Header from './screens/home/Header';
import ForgotPassword from './screens/login/ForgotPassword';
import Chitiet from './screens/home/Chitiet';
import GioHang from './screens/home/GioHang';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login">
       
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="Chitiet" component={Chitiet} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="GioHang" component={GioHang} />
        {/* Thêm các màn hình khác tại đây nếu cần */}
        {/* dan khungf */}
        {/* ssssssssssss */}
        {/* screenssssssssssssssssss */}
        {/* sssssssssssss */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
