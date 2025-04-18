import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Logo from '../assets/Group 1.png';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const SplashScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  useEffect(() => {
    // // Замініть 3000 на бажаний час відображення сплеш-екрану (в мілісекундах)
    // setTimeout(() => {
    //   // Після закінчення часу перейдіть на наступний екран
    //   navigation.navigate('Welcome'); // Замініть 'Welcome' на назву вашого головного екрану
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoImage} resizeMode="contain" />
      </View>
      <Text style={styles.appName}>Book Talk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#000',
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    color: '#333',
  },
});

export default SplashScreen;