import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    marginTop: 20,
    alignItems: 'center',
  },
  empty: {
    color: colors.error,
    fontSize: fonts.small,
    marginTop: 10,
  },
});

export default styles;
