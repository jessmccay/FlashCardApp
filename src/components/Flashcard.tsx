import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

type FlashcardProps = {
    question: string;
    answer: string;
}

const Flashcard: React.FC<FlashcardProps>  = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <TouchableOpacity style={styles.card} onPress={() => setIsFlipped(!isFlipped)}>
            <View style={styles.cardContent}>
                <Text style={styles.text}>{isFlipped ? answer : question}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        marginBottom: 20,
    },
    cardContent: {
        padding: 20, // Prevents text from touching the edges
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default Flashcard;

