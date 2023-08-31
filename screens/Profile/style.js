import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(120),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStatText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
    marginTop: verticalScale(6),
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});

export default style;
