import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type TransportButtonProps = {
    onPress: () => void;
    title: string;
};

export default function TransportButton({ onPress, title }: TransportButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
