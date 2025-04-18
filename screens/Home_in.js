import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Dimensions, PixelRatio, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук useNavigation

const { width, height } = Dimensions.get('window');
const ImageScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation
  const [searchText, setSearchText] = useState('');
  const [genreScreenVisible, setGenreScreenVisible] = useState(false);

  const handleGenrePress = (genre) => {
    // Тут ви можете реалізувати перехід на екран зі списком книг за обраним жанром
    // Замість просто показувати/приховувати екран жанру
    console.log(`Обрано жанр: ${genre}`);
    navigation.navigate('GenreList', { genre: genre }); // Приклад переходу
    setGenreScreenVisible(false);
  };


  const handleProfileClick = () => {
    navigation.navigate('Image'); // Перехід на екран профілю
  };

  const handleAllPress = () => {
    handleGenrePress('Всі');
  };

  const handleFantasyPress = () => {
    handleGenrePress('Фентезі');
  };

  const handleDetectivePress = () => {
    handleGenrePress('Детектив');
  };

  const handleRomancePress = () => {
    handleGenrePress('Роман');
  };

  const handlePsychPress = () => {
    handleGenrePress('Псих');
  };

  const handleViewAllReadingPress = () => {
    navigation.navigate('ReadingList'); // Перехід на екран "Що зараз читають"
  };

  const handleViewAllDiscussionTypesPress = () => {
    navigation.navigate('DiscussionTypes'); // Перехід на екран "Типи обговорень"
  };

  const handleViewAllTopDiscussionsPress = () => {
    navigation.navigate('TopDiscussions'); // Перехід на екран "Топ обговорень"
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Верхня частина екрана */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.userSection} onPress={() => navigation.navigate('Product')}>
            <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.userPhoto} />
            <View style={styles.userInfo}>
              <Text style={styles.helloText}>Helo, Nata </Text>
              <Text style={styles.questionText}>Про що поговоримо сьогодні?</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.backButton}>
              <Image source={require('../assets/support.png')} style={styles.backButtonText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton}>
              <Image source={require('../assets/bell.png')} style={styles.backButtonText} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Пошуковий рядок */}
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

        {/* Що зараз читають */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Що зараз читають</Text>
          <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllReadingPress}>
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        {/* Книги */}
        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('BookDetails', { bookId: 1 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS-1.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Із крові й попелу</Text>
              <Text style={styles.bookAuthor}>Дженніфер Л. Арментраут</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('BookDetails', { bookId: 2 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Розпали мене</Text>
              <Text style={styles.bookAuthor}>Тагере Мафі</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bookRow}>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('BookDetails', { bookId: 3 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Із крові й попелу</Text>
              <Text style={styles.bookAuthor}>Дженніфер Л. Арментраут</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('BookDetails', { bookId: 4 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS-1.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Розпали мене</Text>
              <Text style={styles.bookAuthor}>Тагере Мафі</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Топ обговорень */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Типи обговорень</Text>
          <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllDiscussionTypesPress}>
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        {/* Книги (для типів обговорень - можна замінити на список типів обговорень) */}
        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionList', { type: 'Новинки' })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS-1.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Новинки</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionList', { type: 'Бестселери' })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Бестселери</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bookRow}>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionList', { type: 'Класика' })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Класика</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionList', { type: 'Фентезі' })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS-1.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Фентезі</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Топ обговорень */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Топ обговорень</Text>
          <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllTopDiscussionsPress}>
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        {/* Додаткові книги (за потреби) - можна замінити на список топ обговорень */}
        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionDetails', { discussionId: 101 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS-1.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Обговорення 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book} onPress={() => navigation.navigate('DiscussionDetails', { discussionId: 102 })}>
              <Image source={require('../assets/Cover Image/REPLACE THIS.png')} style={styles.bookCover} />
              <Text style={styles.bookTitle}>Обговорення 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Навігаційна панель */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Image')}>
          <Image source={require('../assets/Bold/Essentional, UI/Vector.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
          <Image source={require('../assets/Outline/School/Vector.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Create')}>
          <Image source={require('../assets/Frame 1000005012.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../assets/vuesax/linear/vuesax/linear/Vector.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Product')}>
          <Image source={require('../assets/Outline/Users/Vector.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
  },
  content: {
    flex: 1,
    padding: width * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.08,
    marginTop: height * 0.05,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Додано flex: 1
  },
  userPhoto: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    marginRight: width * 0.02,
  },
  userInfo: {
    flex: 1, // Додано flex: 1
  },
  backButton: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.06,
    marginLeft: width * 0.02,
    justifyContent: 'center', // Додано для центрування по вертикалі
    alignItems: 'center', // Додано для центрування по горизонталі
  },
  
  // backButtonText: {
  //   fontSize: PixelRatio.roundToNearestPixel(width * 0.06),
  //   textAlign: 'center',
  //   lineHeight: width * 0.9,
  //   backgroundColor: '#E0DAC2',
  //   borderRadius: 50,
  //   left:14,
  //   top: 14,
  // },
  helloText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.05),
    fontWeight: 'light',
    color: '#333',
    fontFamily: 'Georgia',
  },
  questionText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: '#666',
  },
  icons: {
    flexDirection: 'row',
  },
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
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  sectionTitle: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.045),
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllButton: {
    padding: width * 0.01,
  },
  viewAllText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.035),
    color: '#007AFF',
  },
  booksContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  bookRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: height * 0.02,
  },
  book: {
    alignItems: 'center',
  },
  bookCover: {
    width: width * 0.35,
    height: height * 0.25,
    borderRadius: width * 0.025,
    marginBottom: height * 0.01,
  },
  bookTitle: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    fontWeight: 'bold',
    color: '#333',
    marginTop: height * 0.01,
    width: width * 0.4,
  },
  bookAuthor: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.035),
    color: '#666',
    textAlign: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: width * 0.1,
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.05,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.1,
    height: width * 0.1,
  },
  navIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
});

export default ImageScreen;