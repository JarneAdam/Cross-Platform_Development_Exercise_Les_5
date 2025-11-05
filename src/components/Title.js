import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const Title = () => <Text style={styles.container}>Open issues</Text>;

const styles = StyleSheet.create({
    container: {
        fontSize: theme.FONT_SIZE_TITLE,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        textAlign: 'center',
        paddingBottom: theme.SPACING_MB
    },
});

export default Title;