import React from 'react';

import {View, ScrollView, Image} from 'react-native';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabPostContainer}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowContainer]}>
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View
        style={[
          style.imageContainer,
          style.imageUpcomingRowContainer,
          style.lastImageContainer,
        ]}>
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
