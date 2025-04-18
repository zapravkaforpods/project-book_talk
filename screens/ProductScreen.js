import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Імпортуємо хук

const ProductScreen = () => {
  const navigation = useNavigation(); // Отримуємо об'єкт navigation

  const handleBackPress = () => {
    navigation.goBack(); // Повернення на попередній екран
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings'); // Перехід на екран налаштувань (якщо є)
  };

  return (
    <ScrollView style={styles.container}>
      {/* Верхня частина з кнопками навігації та заголовком */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Мій профіль</Text>
         <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/MASEGE.png')} style={styles.backButtonText} />
        </TouchableOpacity>
      </View>

      {/* Інформація профілю */}
      <View style={styles.profileInfo}>
        <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.profileImage} />
        <Text style={styles.userName}>Nata</Text>
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('UserDiscussions')}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Обговорення</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('FollowingList')}>
            <Text style={styles.statNumber}>13</Text>
            <Text style={styles.statLabel}>Відстежує</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('FollowersList')}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>Підписники</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
          <Image source={require('../assets/Linear/Settings, Fine Tuning/Settings.png')} style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Налаштування</Text>
        </TouchableOpacity>
      </View>

      {/* Читаю зараз */}
      <View style={styles.readingNowSection}>
        <Text style={styles.readingNowTitle}>Читаю зараз</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ReadingNowList')}>
          {/* Можна додати компонент зі списком книг, які користувач читає зараз */}
          <Text style={{ color: 'blue', marginTop: 5 }}>Переглянути всі</Text>
        </TouchableOpacity>
      </View>

      {/* Секція з обговореннями, чернетками та лайкнутими */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]} onPress={() => navigation.navigate('UserDiscussions')}>
          <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Обговорення</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Drafts')}>
          <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Чернетки</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('LikedPosts')}>
          <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Лайкнуті</Text>
        </TouchableOpacity>
      </View>

      {/* Контент обговорень (замінено на приклад однієї картки) */}
      <View style={styles.contentSection}>
        <TouchableOpacity style={styles.discussionCard} onPress={() => navigation.navigate('DiscussionDetails', { discussionId: 123 })}>
          <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.bookCover} />
          <View style={styles.discussionInfo}>
            <Text style={styles.discussionTitle}>Доторк темряви: чи варта прочитання нова адаптація міфу про Гадеса і...</Text>
            <Text style={styles.discussionAuthor}>By Rebekah Barton</Text>
            <View style={styles.tagsRow}>
              <TouchableOpacity style={styles.spoilerTag}>
                <Text style={styles.spoilerText}>18+</Text>
                <Text style={styles.spoilerText}>Спойлер</Text>
              </TouchableOpacity>
              <Text style={styles.newText}>Нове</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.optionsButton} onPress={() => console.log('Опції обговорення')}>
            <Image source={require('../assets/2025-04-11 20.17.05.jpg')} style={styles.optionsIcon} />
          </TouchableOpacity>
          <View style={styles.likesRow}>
            <TouchableOpacity style={styles.likeButton} onPress={() => console.log('Лайкнути')}>
              <Image source={require('../assets/Outline/Messages, Conversation/Vector.svg')} style={styles.likeIcon} />
            </TouchableOpacity>
            <Text style={styles.likesCount}>34</Text>
          </View>
          <Text style={styles.timeAgo}>5 хв тому</Text>
        </TouchableOpacity>

        {/* Додайте інші картки обговорень тут */}
        {/* ... */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555,
},
backButtonText: {
    fontSize: 24,
    top: 4,
    left: 12,
},
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    left: -6,
  },
  messageButton: {
    padding: 8,
  },
  messageButtonIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  settingsIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  settingsText: {
    fontSize: 14,
    color: '#333',
  },
  readingNowSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readingNowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E0DAC2',
    paddingVertical: 8,
    marginBottom: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    // Стилі для активної вкладки (можна підкреслення або інший вигляд)
  },
  tabIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  contentSection: {
    paddingHorizontal: 16,
  },
  discussionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 12,
  },
  discussionInfo: {
    flex: 1,
  },
  discussionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  discussionAuthor: {
    fontSize: 12,
    color: '#777',
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  spoilerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 8,
  },
  spoilerText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 2,
  },
  newText: {
    backgroundColor: '#90EE90',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  optionsButton: {
    padding: 4,
  },
  optionsIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  likeIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 4,
  },
  likesCount: {
    fontSize: 12,
    color: '#777',
  },
  timeAgo: {
    fontSize: 10,
    color: '#777',
    textAlign: 'right',
  },
});

export default ProductScreen;