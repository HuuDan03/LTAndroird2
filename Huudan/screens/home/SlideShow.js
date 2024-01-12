// // SlideShow.js
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';
// import {Swiper} from 'react-native-swiper';

// const SlideShow = () => {
//   const images = [
//     require('../../assets/images/banne.webp'),
//     require('../../assets/images/T-shirt1.webp'),
//     require('../../assets/images/banne.webp'),
//   ];

//   return (
//     <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
//       {images.map((imageSource, index) => (
//         <View key={index} style={styles.slide}>
//           <Image source={imageSource} style={styles.image} />
//         </View>
//       ))}
//     </Swiper>
//   );
// };

// const { width } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width,
//     flex: 1,
//     resizeMode: 'cover',
//   },
// });

// export default SlideShow;
