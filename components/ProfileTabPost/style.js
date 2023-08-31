import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabPostContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: '#FFFFFFF',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
  },
  image: {
    maxWidth: horizontalScale(140),
    maxHeight: verticalScale(90),
  },
  imageUpcomingRowContainer: {
    marginTop: verticalScale(11),
  },
  lastImageContainer: {
    marginBottom: verticalScale(150),
  },
});

export default style;
