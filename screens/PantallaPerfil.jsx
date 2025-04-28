import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function PantallaPerfil() {
  const { nombreUsuario } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.saludo}>Hola, {nombreUsuario} 👋</Text>
      <Text style={styles.info}>Este dato fue compartido por contexto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  saludo: {
    fontSize: 26, fontWeight: 'bold', marginBottom: 12
  },
  info: {
    fontSize: 18, color: '#555'
  },
});
