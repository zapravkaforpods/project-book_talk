// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Platform, StatusBar, SafeAreaView } from 'react-native';
// import * as Battery from './node_modules/expo-battery';
// import moment from 'moment';
// import 'moment/locale/uk';

// const StatusBarInfo = () => {
//   const [batteryLevel, setBatteryLevel] = useState('...'); // Ініціалізуємо для кращого відображення до завантаження
//   const [currentTime, setCurrentTime] = useState(moment().locale('uk').format('HH:mm'));
//   const [error, setError] = useState(null); // Додамо стан для відстеження помилок

//   useEffect(() => {
//     const fetchBatteryLevel = async () => {
//       try {
//         const level = await Battery.getBatteryLevelAsync();
//         setBatteryLevel((level * 100).toFixed(0) + '%');
//         setError(null); // Очищаємо помилку при успішному отриманні
//       } catch (error) {
//         console.error('Помилка отримання заряду батареї:', error);
//         setBatteryLevel('N/A');
//         setError('Помилка'); // Встановлюємо повідомлення про помилку
//       }
//     };

//     fetchBatteryLevel();
//     const batterySubscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
//       setBatteryLevel((batteryLevel * 100).toFixed(0) + '%');
//       setError(null); // Очищаємо помилку при оновленні
//     });

//     return () => {
//       batterySubscription.remove();
//     };
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(moment().locale('uk').format('HH:mm'));
//     }, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         <Text style={styles.time}>{currentTime}</Text>
//         <Text style={styles.battery}>
//           {batteryLevel}
//           {error && <Text style={styles.error}> ({error})</Text>}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 100,
//     backgroundColor: 'rgba(240, 240, 240, 0.8)', // Додано прозорість для кращої інтеграції
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     height: Platform.OS === 'android' ? 50 + StatusBar.currentHeight : 50, // Враховуємо висоту статус-бару на Android
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   time: {
//     fontSize: 16,
//     color: '#333',
//   },
//   battery: {
//     fontSize: 16,
//     color: '#333',
//   },
//   error: {
//     fontSize: 12,
//     color: 'red',
//   },
// });

// export default StatusBarInfo;