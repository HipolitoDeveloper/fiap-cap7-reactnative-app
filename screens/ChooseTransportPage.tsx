import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';

const ChooseTransportPage = ({ route, navigation }: any) => {
    const { travel, onCreateTravel } = route.params;

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

    const transportOptions = [
        { name: 'Ônibus', details: 'Rua das neves, 113', price: 'R$4,90', time: '45 min' },
        { name: 'Ônibus -> Trem', details: 'Rua das neves, 113', price: 'R$4,90', time: '35 min' },
        { name: 'Ônibus -> Trem -> Ônibus', details: 'Rua das neves, 113', price: 'R$4,90', time: '55 min' },
    ];

    const transportDescriptions = [
        `
    Ande 5 minutos da sua localização atual para o ponto de onibus na Rua das Neves, 113.
    O onibus de número 335 te levará ao local desejado em 45 minutos.
    O valor da tarifa será de 4,90.
    `,
        `
    Ande 5 minutos da sua localização atual para o ponto de onibus na Rua das Neves, 113.
    O onibus de número 335 te levará à estação Paraíso.
    Na estação Paraíso, siga sentido Sul para a estação Mariana.
    Desça na estação Mariana e ande 10 minutos até o seu destino.
    O valor da tarifa será de Ônibus + Metrô é de 4,90.
    `,
        `
    Ande 5 minutos da sua localização atual para o ponto de onibus na Rua das Neves, 113.
    O onibus de número 335 te levará à estação Paraíso.
    Na estação Paraíso, siga sentido Sul para a estação Mariana.
    Desça na estação Mariana e pegue o ônibus 223 para o seu destino.
    O valor da tarifa será de Ônibus + Trem + Ônibus é de 4,90.
    `,
    ];

    const handleTransportSelection = () => {
        const selectedTransport = transportOptions[selectedOptionIndex].name;
        const selectedDescription = transportDescriptions[selectedOptionIndex];

        const updatedTravel = {
            ...travel,
            transport: selectedTransport,
            description: selectedDescription,
        };

        onCreateTravel(updatedTravel);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha um transporte</Text>

            {/* Display selected transport description */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Caminho</Text>
                <ScrollView style={styles.descriptionScroll}>
                    <Text style={styles.descriptionText}>{transportDescriptions[selectedOptionIndex]}</Text>
                </ScrollView>
            </View>

            {/* Transport options list */}
            <ScrollView style={styles.optionsList}>
                {transportOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionContainer,
                            selectedOptionIndex === index ? styles.optionSelected : styles.option,
                        ]}
                        onPress={() => setSelectedOptionIndex(index)}
                    >
                        <Text style={styles.optionName}>{option.name}</Text>
                        <Text>Detalhes: {option.details}</Text>
                        <Text>Preço: {option.price}</Text>
                        <Text>Tempo: {option.time}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Button to select transport */}
            <Button
                title={`Escolher ${transportOptions[selectedOptionIndex].name}`}
                onPress={handleTransportSelection}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    descriptionContainer: {
        marginBottom: 20,
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    descriptionScroll: {
        maxHeight: 150,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    descriptionText: {
        fontSize: 16,
    },
    optionsList: {
        flex: 1,
        marginBottom: 20,
    },
    optionContainer: {
        padding: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
    },
    option: {
        borderColor: 'transparent',
        backgroundColor: '#f0f0f0',
    },
    optionSelected: {
        borderColor: 'blue',
        backgroundColor: '#e0f7fa',
    },
    optionName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
});

export default ChooseTransportPage;
