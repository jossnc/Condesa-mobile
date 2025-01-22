import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Image, ListRenderItem, TextInput } from "react-native";
import { sucursales, Sucursal } from "../../hooks/sucursalesData";
import { Ionicons } from "@expo/vector-icons";

const SucursalesScreen: React.FC = () => {
    const [selectedSucursal, setSelectedSucursal] = useState<Sucursal | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState("");


    const openModal = (sucursal: Sucursal) => {
        setSelectedSucursal(sucursal);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedSucursal(null);
        setModalVisible(false);
    };
    const filteredSucursales = sucursales.filter((sucursal) =>
        sucursal.name.toLowerCase().includes(searchText.toLowerCase())
    );



    const renderItem: ListRenderItem<Sucursal> = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => openModal(item)}>
                    <Ionicons name="information-circle-outline" size={27} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="call-outline" size={27} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar sucursal..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <FlatList
                data={filteredSucursales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
            {selectedSucursal && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={selectedSucursal.image} style={styles.image} />
                            <Text style={styles.modalTitle}>{selectedSucursal.name}</Text>
                            <Text style={styles.modalText}>Dirección: {selectedSucursal.address}</Text>
                            <Text style={styles.modalText}>Teléfono: {selectedSucursal.phone}</Text>
                            <Text style={styles.modalText}>Coordenadas: {selectedSucursal.latitude}, {selectedSucursal.longitude}</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default SucursalesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#f8f9fa',
        padding: 20,
    },
    searchInput: {
        flex: 1,
        height: 35,
        paddingLeft: 30,
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
    searchIcon: {
        position: 'absolute',
        left: 10,
    },
    list: {
        padding: 10,
        
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        height: 240,
        shadowColor: '#fff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
    },
    button: {
        backgroundColor: '#e7e7e7', // Color gris claro
        padding: 15,
        borderRadius: 30, // Bordes redondeados
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 100,
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '130%',
        height: 220,
        borderRadius: 10,
        marginBottom: 100,
        

    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#0a7ea4',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});