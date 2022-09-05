import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={require('./src/biscoito.png')} style={styles.img} />
            <Text style={styles.textoFrase}>"Alguma frase aqui"</Text>
            <TouchableOpacity style={styles.botao}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Quebrar biscoito</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 250,
        height: 250,
    },
    textoFrase: {
        fontSize: 20,
        color: '#DD7B22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#DD7B22',
        borderRadius: 25
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DD7B22'
    }
});
