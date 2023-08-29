import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: horizontalScale(50),
    padding: horizontalScale(2.5),
  },
});

export default style;
