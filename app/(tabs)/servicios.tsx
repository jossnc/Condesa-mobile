import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ServiciosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Servicios Screen</Text>
    </View>
  );
};

export default ServiciosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
