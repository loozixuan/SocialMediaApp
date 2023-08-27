import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <UserProfileImage />
          <View style={style.userPostInformation}>
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} color={'#79869F'} size={22} />
        </Pressable>
      </View>
      <View style={style.post}>
        <Image
          resizeMethod={'cover'}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={style.userPostStats}>
        <Pressable style={style.userStatsPostButton}>
          <FontAwesomeIcon
            icon={faHeart}
            style={style.userPostStatIcon}
            color={'#79869F'}
          />
          <Text style={style.userPostStatText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.userStatsPostButton}>
          <FontAwesomeIcon
            icon={faComment}
            style={style.userPostStatIcon}
            color={'#79869F'}
          />
          <Text style={style.userPostStatText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={style.userStatsPostButton}>
          <FontAwesomeIcon
            icon={faBookmark}
            style={style.userPostStatIcon}
            color={'#79869F'}
          />
          <Text style={style.userPostStatText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string,
};

export default UserPost;
