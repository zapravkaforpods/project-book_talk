import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Illustration1 from '../assets/24013676_6883571 1.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.topSection}>
        <View style={styles.illustrationContainer}>
          <Image source={Illustration1} style={styles.illustration} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.title}>Читай більше, хвилюйся менше</Text>
        <Text style={styles.subtitle}>
          Приєднуйся до <Text style={styles.boldText}>Book Talk</Text> - додатку для обговорення книг та останніх новин.
          Ділися враженнями, знаходь однодумців і створюй власну книжкову спільноту!
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleLoginPress}>
          <Text style={styles.primaryButtonText}>Розпочати</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleRegisterPress}>
          <Text style={styles.secondaryButtonText}>Зареєструватися</Text>
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
    justifyContent: 'flex-start',
    backgroundColor: '#F1EFE4',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  illustrationContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  illustration: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  middleSection: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'Bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
    lineHeight: 24,
  },
  bottomSection: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#E0DAC2',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#2E3B4E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;