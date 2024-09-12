import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ConfirmPage = ({ route, onCompleteTrip, travel }: any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirmação de Viagem</Text>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.detailText}>
                    Destino: <Text style={styles.boldText}>{travel?.destination}</Text>
                </Text>

                <Text style={styles.detailText}>
                    Data: <Text style={styles.boldText}>{`${travel?.date.getDate()}/${travel?.date.getMonth() + 1}/${travel?.date.getFullYear()}`}</Text>
                </Text>

                <Text style={styles.detailText}>
                    Hora: <Text style={styles.boldText}>{`${travel?.time.getHours()}:${travel?.time.getMinutes()}`}</Text>
                </Text>

                <Text style={styles.detailText}>
                    Transporte: <Text style={styles.boldText}>{travel?.transport}</Text>
                </Text>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{travel?.description}</Text>
                </View>

                <Button title="Concluir Viagem" onPress={onCompleteTrip} />
            </ScrollView>
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
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailText: {
        fontSize: 18,
        marginVertical: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    descriptionContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        marginVertical: 20,
    },
    descriptionText: {
        fontSize: 16,
    },
});

export default ConfirmPage;
