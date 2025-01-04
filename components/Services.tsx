import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const CategoriesSection: React.FC = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.categoriesContainer} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Categoría 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Categoría 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Categoría 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <Text style={styles.categoryText}>Categoría 4</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default CategoriesSection;

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 1,
    },
    category: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});