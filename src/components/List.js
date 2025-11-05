import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { issues } from '../../issues';
import Title from './Title';
import theme from '../theme';

const List = () => {
  const extractId = (id) => id.substr(3);
  const toUpper = (text) => text.substr(0, text.indexOf(' ')).toUpperCase();

  return (
    <View>
      <Title />
      {
        issues
          .filter(issue => issue.status == 'Open')
          .map(issue => (
            <View key={issue.id} style={[styles.issueItem, issue.assigned && issue.assigned.toLowerCase() === 'katerina larson' ? styles.katerina : styles.other]}>
              <Text>
                <Text style={styles.propName}>ID: </Text>
                {extractId(issue.id)}
              </Text>
              <Text>
                <Text style={styles.propName}>Omschrijving: </Text>
                {issue.description}
              </Text>
              <Text>
                <Text style={styles.propName}>Toegewezen aan: </Text>
                {toUpper(issue.assigned)}
              </Text>
            </View>
          ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  issueItem: {
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR_BORDER,
    borderStyle: 'solid',
    marginBottom: theme.SPACING_MB,
    paddingVertical: theme.PADDING_VERTICAL,
    paddingHorizontal: theme.PADDING_HORIZONTAL,
  },
  propName: {
    fontWeight: theme.FONT_WEIGHT_SEMI
  },
  katerina: {
    backgroundColor: theme.COLOR_KATERINA_BG
  },
  other: {
    backgroundColor: theme.COLOR_OTHER_BG
  }
});

export default List;