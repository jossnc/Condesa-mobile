import React from "react";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import TabBar from "../../components/TabBar";

interface CustomHeaderProps {
    title: string;
    showSearch?: boolean;
    search?: string;
    setSearch?: (text: string) => void;
    handleSearch?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showSearch, search, setSearch, handleSearch }) => (

    <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/Condesa-logo.png')} style={styles.logo} />

        <Text style={styles.userText}>Hola, Usuario</Text>
        {showSearch ? (
            <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar código de rastreo..."
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>
                <View style={styles.qrIconContainer}>
                    <Ionicons name="qr-code-outline" size={24} color="#000" />
                </View>
            </View>
        ) : (
            <Text style={styles.headerText}>{title}</Text>
        )}
    </View>
);

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const TabLayout = () => {
    const [search, setSearch] = React.useState('');

    const handleSearch = () => {
        console.log('Buscando:', search);
    };

    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            screenOptions={({ route }) => ({
                header: () => (
                    <CustomHeader
                        title={route.name === 'index' ? 'Home' : capitalizeFirstLetter(route.name)}
                        showSearch={route.name === 'index'}
                        search={search}
                        setSearch={setSearch}
                        handleSearch={handleSearch}
                    />
                ),
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="servicios"
                options={{
                    title: "Servicios",
                }}
            />
            <Tabs.Screen
                name="sucursal"
                options={{
                    title: "Sucursal",
                }}
            />
        </Tabs>
    );
};

export default TabLayout;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0a7ea4',
        padding: 15,
        paddingBottom: 30,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 1,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#0a7ea4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTitle: {
        color: '#fff',
    },
    userText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
       
        
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginRight: 2,
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingLeft: 30,
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
    },
    searchButton: {
        // marginLeft: 10,
        backgroundColor: '#0a7ea4',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrIconContainer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 7,
    },
});