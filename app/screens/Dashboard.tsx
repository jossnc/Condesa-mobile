import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { NavigationProp } from '@react-navigation/native';
import CategoriesSection from "@/components/Services";


interface DashboardProps {
    navigation: NavigationProp<any>;
}


const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
   
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.largeCard}>
                    <Text style={styles.title}>Bienvenido</Text>
                </View>
                <CategoriesSection />
                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla1')}>
                        <Text style={styles.cardText}>Pantalla 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla2')}>
                        <Text style={styles.cardText}>Pantalla 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla3')}>
                        <Text style={styles.cardText}>Pantalla 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       //backgroundColor: '#fff',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingLeft: 30,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '85%',
        left: 30,
        top:10,
    },
    searchButton: {
        marginLeft: 10,
        backgroundColor: '#0a7ea4',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardsContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#f8f9fa',
    },
    card: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#afafaf',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    largeCard: {
        width: '80%',
        aspectRatio: 2,
        left: 40,
        top:20,
        borderRadius: 20,
        backgroundColor: '#afafaf',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollContainer: {
        flexGrow: 1,
    },

});