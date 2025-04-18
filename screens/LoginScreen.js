import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Logo from '../assets/Group 1.png';
import AppleIcon from '../assets/Sign up/Button.png';
import GoogleIcon from '../assets/Sign up/Button2.png';
import FacebookIcon from '../assets/Sign up/Button-1.png';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const LoginScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  const handleBackPress = () => {
    navigation.goBack(); // Повернення на попередній екран
  };

  const handleRegisterLinkPress = () => {
    navigation.navigate('Register'); // Перехід на екран реєстрації
  };

  const handleLoginPress = () => {
    // Тут має бути логіка вашої автентифікації
    // Після успішної автентифікації перейдіть на наступний екран, наприклад, 'Welcome' або 'Image'
    navigation.navigate('Welcome'); // Приклад переходу після входу
  };

  const handleForgotPasswordPress = () => {
    // Тут має бути логіка для відновлення пароля
    console.log('Забули пароль?');
    // Можна додати перехід на екран відновлення пароля, якщо він у вас є
    // navigation.navigate('ForgotPassword');
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
      <Text style={styles.loginTitle}>Увійти</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Повне Ім'я/Пошта</Text>
        <TextInput style={styles.input} placeholder="Введіть Ваше ім'я чи пошту" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput style={styles.input} placeholder="Введіть Ваш пароль" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPasswordText}>Забули пароль?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Увійти</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <View style={styles.divider} />
        <Text style={styles.socialLoginText}>увійти за допомогою</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Увійти через Apple')}>
            <Image source={AppleIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Увійти через Google')}>
            <Image source={GoogleIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Увійти через Facebook')}>
            <Image source={FacebookIcon} style={styles.socialIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Не зареєстровані?</Text>
        <TouchableOpacity onPress={handleRegisterLinkPress}>
          <Text style={styles.registerLink}>Реєстрація</Text>
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
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
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
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#191815',
  },
  loginButton: {
    width: 380,
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginBottom: 30,
    width: '100%',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  socialLoginText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // socialButton: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 30,
  //   paddingVertical: 12,
  //   paddingHorizontal: 25,
  //   alignItems: 'center',
  // },
  socialIcon: {
    width: 116,
    height: 56,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#757575',
    marginRight: 5,
  },
  registerLink: {
    fontSize: 16,
    color: '#191815',
    fontWeight: 'bold',
  },
});

export default LoginScreen;