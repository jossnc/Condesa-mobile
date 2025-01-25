import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import CategoriesSection from "../../components/Services";

interface DashboardProps {
    navigation: NavigationProp<any>;
}

const items = [
    { id: 1, src: require('../../assets/images/matriz.jpg') },
    { id: 2, src: require('../../assets/images/durango.jpg') },
    { id: 3, src: require('../../assets/images/juarez.jpg') },
];

const { width: viewportWidth } = Dimensions.get('window');

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
               
                <CategoriesSection />
                <View style={styles.largeCard}>
                    <PagerView style={styles.pagerView} initialPage={0}>
                        {items.map((item) => (
                            <View key={item.id} style={styles.carouselItem}>
                                <Image source={item.src} style={styles.carouselImage} />
                            </View>
                        ))}
                    </PagerView>
                </View>
                {/* <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla1')}>
                        <Text style={styles.cardText}>Pantalla 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla2')}>
                        <Text style={styles.cardText}>Pantalla 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pantalla3')}>
                        <Text style={styles.cardText}>Pantalla 3</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ScrollView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingTop: 20,
        //backgroundColor: '#fff',
    },
    largeCard: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: 'rgba(255, 255, 255, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    pagerView: {
        width: '100%',
        height: '100%',
    },
    carouselItem: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#11181C',
    },
    cardsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        width: '80%',
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});