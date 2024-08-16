import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Cabeçalho: {
        backgroundColor: 'black',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCabeçalho: {
        fontSize: 20,
        color: 'green',

    },

    Corpo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    textCorpo: {
        fontSize: 40,
        color: 'blue',
        
    },


    Rodapé: {
        backgroundColor: 'black',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textRodapé: {
        fontSize: 20,
        color: 'yellow',
        
    },

});

