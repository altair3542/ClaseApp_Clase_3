import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaInicio from './screens/PantallaInicio';
import PantallaPerfil from './screens/PantallaPerfil';
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={PantallaInicio} />
          <Stack.Screen name="Perfil" component={PantallaPerfil} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
