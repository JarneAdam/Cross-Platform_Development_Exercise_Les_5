import { View, StyleSheet, Text } from 'react-native';
import { issues } from '../../issues';
import Title from './Title';
import theme from './styles/theme.style';

const List = () => {
  const { container, property } = styles;
  const extractId = (id) => id.substr(3);
  const toUpper = (text) => text.substr(0, text.indexOf(' ')).toUpperCase();

  return (
    <View>
      <Title />
      {issues
        .filter((issue) => issue.status == 'Open')
        .map((issue) => (
          <View
            style={[
              container,
              {
                backgroundColor:
                  issue.assigned == 'Katerina larson'
                    ? theme.ISSUE_HIGHLIGHT
                    : theme.ISSUE_COLOR,
              },
            ]}
          >
            <Text>
              <Text style={property}>ID: </Text>
              {extractId(issue.id)}
            </Text>
            <Text>
              <Text style={property}>Omschrijving: </Text>
              {issue.description}
            </Text>
            <Text>
              <Text style={property}>Toegewezen aan: </Text>
              {toUpper(issue.assigned)}
            </Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: theme.BORDER_COLOR,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    marginBottom: 10,
    padding: 5,
  },
  property: {
    fontWeight: theme.PROPERTY_WEIGHT,
  },
});

export default List;
