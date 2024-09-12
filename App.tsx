import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseTimePage from "./screens/ChooseTimePage";
import ChooseTransportPage from "./screens/ChooseTransportPage";
import LoginPage from './screens/LoginPage';
import MainPage from "./screens/MainPage";
import RegisterPage from './screens/RegisterPage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
                <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }}/>
                <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
                <Stack.Screen name="ChooseTime" component={ChooseTimePage} options={{headerShown: false, title: 'Escolha um horário'}} />
                <Stack.Screen name="ChooseTransport" component={ChooseTransportPage  }  options={{headerShown: false, title: 'Escolha um transporte'}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
