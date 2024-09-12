import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TravelsPage = ({ travels }: any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viagens Feitas</Text>

            {travels.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhuma viagem concluída.</Text>
                </View>
            ) : (
                <FlatList
                    data={travels}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listTitle}>{item.transport || 'Sem transporte'}</Text>
                            <Text style={styles.listSubtitle}>
                                Data: {`${item.date.getDate()}/${item.date.getMonth() + 1}/${item.date.getFullYear()}`}
                            </Text>
                            <Text style={styles.listSubtitle}>Destino: {item.destination}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'blue',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: 'gray',
    },
    listItem: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    listSubtitle: {
        fontSize: 16,
        color: 'gray',
    },
});

export default TravelsPage;
