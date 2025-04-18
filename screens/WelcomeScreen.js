import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/Group 1.png';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  const handleContinuePress = () => {
    navigation.navigate('Image'); // Перехід на головний екран (ImageScreen або інший)
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.illustrationContainer}>
        {/* Тут ви можете додати зображення з руками та книгами */}
        {/* Оскільки у мене немає цього зображення, я використовую надане вами */}
        <Image source={require('../assets/Sign up/Group.png')} style={styles.illustration} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Обговорюйте улюблені книги з однодумцями!</Text>
        <Text style={styles.subtitle}>
          Приєднуйтесь до книжкових дискусій, знаходьте цікавих співрозмовників та діліться
          враженнями від прочитаного
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Продовжити</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4', // Фоновий колір, як на скріншоті
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 150, // Приблизний розмір логотипу
    height: 150,
    resizeMode: 'contain',
  },
  illustrationContainer: {
    alignItems: 'center',
    width: '100%',
    height: 200, // Приблизна висота ілюстрації
    justifyContent: 'center',
  },
  placeholderIllustration: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  illustration: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#191815', // Колір кнопки "Продовжити"
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;