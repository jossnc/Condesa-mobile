import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface TabBarButtonProps {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    label: any;
    color: string;
    renderIcon: (props: { color: string }) => JSX.Element;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
    onPress,
    onLongPress,
    isFocused,
    renderIcon,
    label,
    color,
}) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => [
                styles.container,
                {
                    backgroundColor: isFocused ? '#e0e0e0' : '#fff',
                    shadowOpacity: pressed ? 0.5 : 0,
                },
            ]}
        >
            {renderIcon({ color: isFocused ? color : '#222' })}
            <Text style={{ color: isFocused ? color : '#222' }}>{label}</Text>
        </Pressable>
    );
};

export default TabBarButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
});