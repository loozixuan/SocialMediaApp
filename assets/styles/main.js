import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const style = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
    paddingHorizontal: horizontalScale(26),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    width: horizontalScale(11),
    height: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(11),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(7),
    top: verticalScale(8),
  },
  messageNumber: {
    fontSize: scaleFontSize(6),
    fontFamily: 'Inter',
    lineHeight: scaleFontSize(7),
    fontWeight: '600',
    color: '#fff',
  },
  userStoryContainer: {
    paddingTop: verticalScale(12),
  },
  firstUserContainer: {
    paddingLeft: horizontalScale(26),
  },
  followingUserContainer: {
    paddingLeft: horizontalScale(0),
  },
  userPostContainer: {
    marginTop: verticalScale(30),
    paddingHorizontal: horizontalScale(22),
  },
});

export default style;
