import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ImageScreen from './screens/Home_in';
import ProductScreen from './screens/ProductScreen';
import Search from './screens/search.js';
// import StatusBarInfo from './screens/StatusBarInfo'; // Переконайтеся, що шлях правильний

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}> {/* Обертаємо NavigationContainer у View */}
      <NavigationContainer>
        {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading ? <Stack.Screen name="Splash" component={SplashScreen} /> : null}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <StatusBarInfo /> Додаємо компонент StatusBarInfo */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
    paddingTop: 50,
  },
});

export default App;