import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import { Travel } from "../models/Travel";
import ConfirmPage from "../screens/ConfirmPage";
import HomePage from "../screens/HomePage";
import TravelsPage from "../screens/TravelsPage";

const MainPage = () => {
    const [travels, setTravels] = useState<Travel[]>([]);
    const [completedTravels, setCompletedTravels] = useState<Travel[]>([]);
    const [currentTravel, setCurrentTravel] = useState<Travel | null>(null);
    const userName = 'Gabriel';

    const navigation = useNavigation<any>();

    const addTravel = (travel: Travel) => {
        setTravels([...travels, travel]);
        setCurrentTravel(travel);
        navigation.navigate('Confirm');
    };

    const completeTravel = () => {
        if (currentTravel) {
            setCompletedTravels([...completedTravels, currentTravel]);
            setTravels(travels.filter((t) => t !== currentTravel));
            setCurrentTravel(null);
            navigation.navigate('Home');
        }
    };

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;
                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Travels') {
                        iconName = 'bus-outline';
                    } else if (route.name === 'Confirm') {
                        iconName = 'checkmark-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" options={{headerShown: false, title: 'Confirmação'}}>
                {() => (
                    <HomePage
                        onCreateTravel={addTravel}
                        userName={userName}
                        currentTravel={currentTravel}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="Travels" options={{headerShown: false, title: 'Viagens'}} >
                {() => <TravelsPage travels={completedTravels} />}
            </Tab.Screen>
            <Tab.Screen name="Confirm" options={{headerShown: false, title: 'Confirmação'}}>
                {() =>
                    currentTravel ? (
                        <ConfirmPage travel={currentTravel} onCompleteTrip={completeTravel} />
                    ) : (
                        <View style={styles.container}>
                            <Text>Nenhuma viagem em andamento</Text>
                        </View>
                    )
                }
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainPage;
