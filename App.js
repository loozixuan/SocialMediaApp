import React, {useState} from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'Apple',
      id: 3,
    },
    {
      firstName: 'Banana',
      id: 4,
    },
    {
      firstName: 'Potato',
      id: 5,
    },
    {
      firstName: 'Strawberry',
      id: 6,
    },
    {
      firstName: 'Joselin',
      id: 7,
    },
    {
      firstName: 'Graph',
      id: 8,
    },
    {
      firstName: 'Unknown',
      id: 9,
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jeniffer',
      lastName: 'Wilkson',
      location: 'Pondol Leungder, Jawa Barat',
      likes: 453,
      comments: 12,
      bookmarks: 32,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Eve',
      location: 'Boston, Jawa Barat',
      likes: 12,
      comments: 2,
      bookmarks: 44,
      id: 3,
    },
    {
      firstName: 'Zi',
      lastName: 'Xuan',
      location: 'Uluuu Yammm, Jawa Barat',
      likes: 0,
      comments: 21,
      bookmarks: 1,
      id: 4,
    },
    {
      firstName: 'Nicoleas',
      lastName: 'Marasads',
      location: 'Berlin, Germany',
      likes: 0,
      comments: 21,
      bookmarks: 1,
      id: 5,
    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));
  const [renderDataPosts, setRenderDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }

    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }

    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContainer}>
          <FlatList
            onMomentumScrollBegin={() => setIsLoading(false)}
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={renderData}
            renderItem={({item, index}) => (
              <UserStory
                firstName={item.firstName}
                style={
                  index === 0
                    ? style.firstUserContainer
                    : style.followingUserContainer
                }
              />
            )}
          />
        </View>
        <View style={style.userPostContainer}>
          <FlatList
            onMomentumScrollBegin={() => setIsLoadingPosts(false)}
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              if (!isLoadingPosts) {
                setIsLoadingPosts(true);
                setRenderDataPosts(prev => [
                  ...prev,
                  ...pagination(posts, pageNumber + 1, pageSize, true),
                ]);
                setIsLoadingPosts(false);
              }
            }}
            showsVerticalScrollIndicator={false}
            data={renderDataPosts}
            renderItem={({item}) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmarks}
                location={item.location}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
