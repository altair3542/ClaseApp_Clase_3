import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

export default function App() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    if (nombre.length === 0) {
      setMensaje('');
    } else if (nombre.length < 3){
      setMensaje("nombre muy corto")
    } else {
      setMensaje("nombre valido")
    }
   }, [nombre])

   return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>

      <TextInput
        style={styles.imput}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {mensaje.length > 0 && (
        <Text style={[
          styles.mensaje, mensaje === "nombre valido" ? styles.exito : styles.error
        ]}>
          {mensaje}
        </Text>
      )}
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: "#fff"
  },
  label: {
    fontSize: 18,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  mensaje: {
    fontSize: 16,
    margintop: 8
  },
  exito: {
    color: 'green'
  },
  error: {
    color: 'red'
  }
})
