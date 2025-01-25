import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { icons } from '../constants/icons';
import { Colors } from '../constants/Colors';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabbarContainer}>
            <View style={styles.tabbar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const IconComponent = icons[route.name as keyof typeof icons];

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                        >
                            {IconComponent && <IconComponent color={isFocused ? Colors.light.tint : Colors.light.tint} />}
                            <Text style={{ color: isFocused ? Colors.light.tint : Colors.light.text, fontSize: 12 }}>
                                {route.name === 'Home' ? 'Inicio' : route.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default TabBar;

const styles = StyleSheet.create({
    tabbarContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabbar: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});