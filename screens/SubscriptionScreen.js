import React, { useState } from 'react'
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

const SubscriptionScreen = () => {
  const [email, setEmail] = useState('')
  const isButtonDisabled = email.trim() === '' // Desactiva el botón si el campo de email está vacío

  const validateEmail = () => {
    // Expresión regular para validar el formato de email
    const emailPattern = /\S+@\S+\.\S+/
    if (!emailPattern.test(email)) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Advertencia',
        textBody: 'Introduzca un correo válido.',
        button: 'Cerrar',
      })
      return
    }
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Felicidades',
      textBody: 'Te acabas de suscribir.',
      button: 'Cerrar',
    })
  }

  return (
    <AlertNotificationRoot>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Suscríbete</Text>
          <Image
            source={require('../assets/little-lemon-logo-grey.png')}
            style={styles.logo}
            resizeMode='contain'
          />
          <Text style={styles.subText}>
            Recibe las últimas noticias de Little Lemon
          </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Pressable
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={validateEmail}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Suscribirme</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </AlertNotificationRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ccc', // Color de fondo deshabilitado
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
})

export default SubscriptionScreen
