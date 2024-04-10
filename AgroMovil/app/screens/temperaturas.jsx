import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PecesGif from '../../assets/peces.gif';
import invGif from '../../assets/inv.gif';


export default function Temperaturas() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contenedor} onPress={() => navigation.navigate('TempAmbiente')}>
                <Image source={invGif} style={styles.gif}/>
                <View style={styles.caja}></View>
                <Text style={styles.titulo}>Ambiental</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.contenedor} onPress={() => navigation.navigate('TempAgua')}>
                <Image source={PecesGif} style={styles.gif}/>
                <View style={styles.caja}></View>
                <Text style={styles.titulo}>Temperatura en Agua</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        maxHeight: '100%'
    },
    contenedor: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '45%',
        padding: 10
    },
    gif: {
        width: '100%',  
        height: '100%',
        borderRadius: 20,
    },
    titulo: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        position: 'absolute', 
    },
    caja: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        position: 'absolute',
        borderRadius: Platform.OS === 'android' ? 0 : 20,
    }
});
