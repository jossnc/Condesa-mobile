import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2023 Your Company</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        //backgroundColor: Colors.light.background,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.light.text,
    },
});