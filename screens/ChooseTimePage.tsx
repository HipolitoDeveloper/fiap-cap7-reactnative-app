import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const ChooseTimePage = ({ route }: any) => {
    const { destination, onCreateTravel } = route.params;
    const navigation = useNavigation<any>();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event: any, date: any) => {
        setShowDatePicker(false);
        if (date) setSelectedDate(date);
    };

    const handleTimeChange = (event: any, time: any) => {
        setShowTimePicker(false);
        if (time) setSelectedTime(time);
    };

    const handleNext = () => {
        const newTravel = {
            destination: destination,
            date: selectedDate,
            time: selectedTime,
        };

        navigation.navigate('ChooseTransport', {
            travel: newTravel,
            onCreateTravel: onCreateTravel,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha um horário</Text>

            {/* Date Picker */}
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.picker}>
                <Text>Dia: {selectedDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    minimumDate={new Date()}
                    maximumDate={new Date(2101, 11, 31)}
                />
            )}

            {/* Time Picker */}
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.picker}>
                <Text>Hora de ida: {selectedTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                    is24Hour={true}
                />
            )}

            <Button title="Próximo" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    picker: {
        padding: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default ChooseTimePage;
