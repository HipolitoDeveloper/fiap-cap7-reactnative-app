import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const HomePage = ({ onCreateTravel, userName, currentTravel }: any) => {
    const [destination, setDestination] = useState('');
    const navigation = useNavigation<any>();
    const isInputDisabled = currentTravel !== null;

    const handleNextPress = () => {
        if (destination) {
            navigation.navigate('ChooseTime', {
                destination: destination,
                onCreateTravel: onCreateTravel,
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="home" size={24} color="white" />
                <Text style={styles.headerText}>Home</Text>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{userName[0].toUpperCase()}</Text>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.welcomeText}>Seja bem-vindo, {userName}!</Text>

                {isInputDisabled && (
                    <Text style={styles.warningText}>Você já possui uma viagem em andamento.</Text>
                )}

                <TextInput
                    style={styles.input}
                    placeholder="Para onde você vai?"
                    value={destination}
                    onChangeText={setDestination}
                    editable={!isInputDisabled}
                />

                <Button
                    title="Próximo"
                    onPress={handleNextPress}
                    disabled={isInputDisabled || !destination}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'blue',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
    avatar: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: 'blue',
        fontSize: 18,
    },
    body: {
        marginTop: 20,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    warningText: {
        color: 'red',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginVertical: 20,
        borderRadius: 5,
    },
});

export default HomePage;
