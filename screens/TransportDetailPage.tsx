import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransportDetailPage() {
    return (
        <View style={styles.container}>
            <Text>Transport Details</Text>
            {/* Add transport detail components here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
