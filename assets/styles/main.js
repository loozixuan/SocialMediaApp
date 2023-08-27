import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingHorizontal: 26,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    top: 10,
  },
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#fff',
  },
  userStoryContainer: {
    paddingTop: 12,
  },
  firstUserContainer: {
    paddingLeft: 26,
  },
  followingUserContainer: {
    paddingLeft: 0,
  },
  userPostContainer: {
    marginTop: 30,
    height: '100%',
    paddingHorizontal: 22,
  },
});

export default style;
