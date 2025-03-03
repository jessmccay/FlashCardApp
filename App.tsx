import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashcardScreen from './src/screens/FlashcardScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Flashcards" component={FlashcardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
