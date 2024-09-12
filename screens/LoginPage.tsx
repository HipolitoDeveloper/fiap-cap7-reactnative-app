import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<any>();

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        } else {
            navigation.navigate('Main');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encontre o meio de transporte ideal para você</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite aqui seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Digite aqui sua senha"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Não tem uma conta? Cadastre-se aqui!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
    },
});

export default LoginPage;
