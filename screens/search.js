import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Або інша бібліотека іконок
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const SearchScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  const handleBackPress = () => {
    navigation.goBack(); // Повернення на попередній екран
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Верхня панель */}
      <View style={styles.topBar}>
       <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                 {/* <Text style={styles.backButtonText}>←</Text> */}
                 <Feather name="arrow-left" size={24} color="black" />
                 </TouchableOpacity>
      <View style={styles.searchBar}>
                <TouchableOpacity onPress={() => console.log('Пошук')}>
                  <Image source={require('../assets/search-interface-symbol.png')} />
                </TouchableOpacity>
                <TextInput
                  style={styles.searchText}
                  placeholder="Пошук"
                  value={searchText}
                  onPress={() => navigation.navigate('Search')}
                  onChangeText={setSearchText}
                  onSubmitEditing={() => navigation.navigate('SearchResults', { query: searchText })} // Перехід після натискання Enter
                />
              </View>
              </View>
      {/* Категорії */}
             <ScrollView horizontal style={styles.categories}>
               <TouchableOpacity style={styles.categoryButton} onPress={handleAllPress}>
                 <Text style={styles.categoryText}>Всі</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.categoryButton} onPress={handleFantasyPress}>
                 <Text style={styles.categoryText}>Фентезі</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.categoryButton} onPress={handleDetectivePress}>
                 <Text style={styles.categoryText}>Детектив</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.categoryButton} onPress={handleRomancePress}>
                 <Text style={styles.categoryText}>Роман</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.categoryButton} onPress={handlePsychPress}>
                 <Text style={styles.categoryText}>Псих</Text>
               </TouchableOpacity>
             </ScrollView>

      {/* Історія пошуку */}
      <ScrollView style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Історія пошуку</Text>
        <View style={styles.searchItem}>
          <Image
            source={{ uri: 'URL_ОБКЛАДИНКИ_КНИГИ' }} // Замініть на реальний URL
            style={styles.bookCover}
          />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>Хірург</Text>
            <Text style={styles.bookAuthor}>Тесс Геррітсен</Text>
            <View style={styles.ratingContainer}>
              <Feather name="star" size={16} color="#FFC107" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
            <Text style={styles.bookDescription}>
              Пенелопафі Бальфур, вона ж Маківка - не просто осиротіла донька багатіїв,
              наближених до королівської родини, а ще й Діва. Діву роками готують до...
            </Text>
          </View>
          <TouchableOpacity onPress={() => { /* Обробка додаткових дій */ }}>
            <Feather name="more-vertical" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        {/* Додайте інші елементи історії пошуку */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555, // Для створення круглої кнопки
    justifyContent: 'center', // Центрування по вертикалі
    alignItems: 'center',    // Центрування по горизонталі
  },

  // topBar: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 16,
  //   paddingTop: 16,
  //   backgroundColor: 'white',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#eee',
  // },
  // searchContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#eee',
  //   borderRadius: 8,
  //   marginLeft: 16,
  //   paddingHorizontal: 8,
  // },
  // searchIcon: {
  //   marginRight: 8,
  // },
  // searchInput: {
  //   flex: 1,
  //   height: 40,
  // },
searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
    top: -50,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: 'black',
    backgroundColor: '#E0DAC2',
    marginLeft: width * 0.02,
  },
  categories: {
    top: -25,
    marginBottom: height * 0.01,
  },
  categoryButton: {
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginRight: width * 0.02,
  },
  categoryText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.035),
    color: '#333',
  },
  categories: {
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryButton: {
    backgroundColor: '#ddd',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  activeCategory: {
    backgroundColor: '#000', // Або інший колір активної категорії
  },
  categoryText: {
    fontSize: 14,
    color: 'black',
  },
  activeCategoryText: {
    color: 'white',
  },
  historyContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: '#FFC107',
  },
  bookDescription: {
    fontSize: 12,
    color: 'gray',
    lineHeight: 18,
  },
});

export default SearchScreen;