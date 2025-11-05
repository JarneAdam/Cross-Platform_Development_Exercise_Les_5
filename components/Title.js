import { Text, StyleSheet } from 'react-native';
import theme from './styles/theme.style';

const Title = () => <Text style={styles.text}>Open issues</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: theme.TITLE_FONT_SIZE,
    fontWeight: theme.TITLE_WEIGHT,
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default Title;
