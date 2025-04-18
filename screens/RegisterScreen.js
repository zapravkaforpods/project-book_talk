import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Logo from '../assets/Group 1.png';
import AppleIcon from '../assets/Sign up/Button.png';
import GoogleIcon from '../assets/Sign up/Button2.png';
import FacebookIcon from '../assets/Sign up/Button-1.png';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const RegisterScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  const handleBackPress = () => {
    navigation.goBack(); // Повернення на попередній екран
  };

  const handleRegisterSuccess = () => {
    // Тут має бути логіка вашої реєстрації
    // Після успішної реєстрації перейдіть на наступний екран, наприклад, 'Welcome'
    navigation.navigate('Welcome');
  };

  const handleLoginLinkPress = () => {
    navigation.navigate('Login'); // Перехід на екран входу
  };

  const handleSocialRegister = (platform) => {
    console.log(`Реєстрація через ${platform}`);
    // Тут можна додати логіку для реєстрації через соціальні мережі
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <View style={styles.logoh}>
          <Image source={Logo} resizeMode="contain" />
        </View>
      </View>
      <Text style={styles.registerTitle}>Зареєструватися</Text>
      <Text style={styles.registerSubtitle}>Людина з гарною книгою в руках ніколи не може бути самотньою</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Повне Ім'я</Text>
        <TextInput style={styles.input} placeholder="Введіть Ваше ім'я" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пошта</Text>
        <TextInput style={styles.input} placeholder="Введіть Вашу електронну пошту" keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput style={styles.input} placeholder="Введіть Ваш пароль" secureTextEntry={true} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Підтвердити Пароль</Text>
        <TextInput style={styles.input} placeholder="Введіть Ваш пароль повторно" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterSuccess}>
        <Text style={styles.registerButtonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <View style={styles.divider} />
        <Text style={styles.socialLoginText}>реєстрація за допомогою</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Apple')}>
            <Image source={AppleIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Google')}>
            <Image source={GoogleIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Facebook')}>
            <Image source={FacebookIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.haveAccountContainer}>
        <Text style={styles.haveAccountText}>Маєте аккаунт?</Text>
        <TouchableOpacity onPress={handleLoginLinkPress}>
          <Text style={styles.loginLink}>Увійти</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F1EFE4',
  },
  backButton: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoh: {
    backgroundColor: '#2E3B4E',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  registerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
    marginBottom: 30,

  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0DAC2',
    borderRadius: 555,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#E0DAC2',
  },
  registerButton: {
    width: 380,
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  socialLoginText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 15,
  },
  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 10,
  },
  haveAccountText: {
    fontSize: 16,
    color: '#757575',
    marginRight: 5,
  },
  loginLink: {
    fontSize: 16,
    color: '#191815',
    fontWeight: 'bold',
  },
  socialIcon: {
    width: 116,
    height: 56,
    margin: 6,
  },
});

export default RegisterScreen;