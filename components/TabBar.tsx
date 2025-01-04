import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import TabBarButton from "./TabBarButton";
import { icons } from "../constants/icons"; // Importamos los íconos centralizados

type IconKeys = keyof typeof icons; // Tipo que asegura que solo se usen claves válidas de icons

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();

    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                // Garantizar que route.name sea una clave válida para icons
                //const renderIcon = icons[route.name as IconKeys] || (() => null);

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        renderIcon={icons[route.name as IconKeys]}
                        label={label}
                        color={isFocused ? colors.primary : colors.text} 
                                          />

                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
