import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Image, ListRenderItem } from "react-native";
import { sucursales, Sucursal } from "../../hooks/sucursalesData";

const SucursalesScreen: React.FC = () => {
    const [selectedSucursal, setSelectedSucursal] = useState<Sucursal | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (sucursal: Sucursal) => {
        setSelectedSucursal(sucursal);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedSucursal(null);
        setModalVisible(false);
    };

    const renderItem: ListRenderItem<Sucursal> = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => openModal(item)}>
                <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={sucursales}
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
        backgroundColor: '#f8f9fa',
    },
    list: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0a7ea4',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        width: '80%',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
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