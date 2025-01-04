import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Dashboard from "@/app/screens/Dashboard";
import { NavigationProp } from '@react-navigation/native';
import Footer from "@/components/Footer";

interface PageProps {
    navigation: NavigationProp<any>;
}

const Page = ({ navigation }: PageProps) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Dashboard navigation={navigation} />
                <Footer />
            </View>
        </ScrollView>
    );
};

export default Page;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
});