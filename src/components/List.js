import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { issues } from '../../issues';
import Title from './Title';
import theme from '../theme';

const List = ({ status }) => {
  const extractId = (id) => id.substr(3);
  const toUpper = (text) => text.substr(0, text.indexOf(' ')).toUpperCase();

  const renderItem = ({ item }) => (
    <View style={[styles.issueItem, item.assigned && item.assigned.toLowerCase() === 'katerina larson' ? styles.katerina : styles.other]}>
      <Text>
        <Text style={styles.propName}>ID: </Text>
        {extractId(item.id)}
      </Text>
      <Text>
        <Text style={styles.propName}>Omschrijving: </Text>
        {item.description}
      </Text>
      <Text>
        <Text style={styles.propName}>Toegewezen aan: </Text>
        {toUpper(item.assigned)}
      </Text>
    </View>
  );

  const filteredIssues = issues.filter(issue => issue.status === status);

  return (
    <View>
      <Title status={status} />
      <FlatList
        data={filteredIssues}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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