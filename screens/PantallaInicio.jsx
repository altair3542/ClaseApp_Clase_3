import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function PantallaInicio({ navigation }) {
  const [nombre, setNombre] = useState('')
  const { setNombreUsuario } = useContext(UserContext)

  const puedeContinuar = nombre.trim() !== ''

  const manejarContinuar = () => {
    setNombreUsuario(nombre)
    navigation.navigate('Perfil')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button
        title="Continuar"
        onPress={manejarContinuar}
        disabled={!puedeContinuar}
      />

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', paddingHorizontal: 24,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 18, marginBottom: 8
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    padding: 12, fontSize: 16, marginBottom: 16
  },
});
