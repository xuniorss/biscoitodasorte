import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
    const [textSentence, setTextSentence] = useState([])
    const [img, setImg] = useState(require('./src/biscoito.png'))

    let phrases = [
        'A vida trará coisas boas se tiveres paciência."',
        'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.',
        'Gente todo dia arruma os cabelos, por que não o coração?',
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
        'A juventude não é uma época da vida, é um estado de espírito.',
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
        'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
        'Siga os bons e aprenda com eles.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.',
        'O bom-senso vai mais longe do que muito conhecimento.',
        'Quem quer colher rosas deve suportar os espinhos.',
        'São os nossos amigos que nos ensinam as mais valiosas lições.',
        'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
        'Aquele que se importa com o sentimento dos outros, não é um tolo.',
        'A adversidade é um espelho que reflete o verdadeiro eu.',
        'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
        'Uma bela flor é incompleta sem suas folhas.',
        'Sem o fogo do entusiasmo, não há o calor da vitória.',
        'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
        'O riso é a menor distância entre duas pessoas.',
        'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.'
    ]

    const breakCookie = () => {
        let randomNumber = Math.floor(Math.random() * phrases.length)
        setTextSentence(`"${phrases[randomNumber]}"`)
        setImg(require('./src/biscoitoAberto.png'))
    }

    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <Text style={styles.textoFrase}>{textSentence}</Text>
            <TouchableOpacity onPress={() => breakCookie()} style={styles.botao}>
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
