import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

type RootStackParamList = {
    Home: undefined;
    Flashcards: undefined;
};

type FlashcardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Flashcards'>;

type Props = {
    navigation: FlashcardScreenNavigationProp;
};

const flashcards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', answer: '4' },
    { id: 3, question: 'Who wrote "1984"?', answer: 'George Orwell' },
    // Add more flashcards as needed
];

export default function FlashcardScreen({ navigation }: Props) {
    const [showAnswer, setShowAnswer] = useState<boolean[]>(new Array(flashcards.length).fill(false));
    const toggleAnswer = (index: number) => {
        const updatedShowAnswer = [...showAnswer];
        updatedShowAnswer[index] = !updatedShowAnswer[index];
        setShowAnswer(updatedShowAnswer);
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Flashcards</Text>

            {flashcards.map((flashcard, index) => (
                <View key={flashcard.id} style={styles.flashcard}>
                    <Text style={styles.question}>{flashcard.question}</Text>
                    {showAnswer[index] && <Text style={styles.answer}>{flashcard.answer}</Text>}
                    <Button title={showAnswer[index] ? 'Hide Answer' : 'Show Answer'} onPress={() => toggleAnswer(index)} />
                </View>
            ))}

            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    flashcard: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
    },
});