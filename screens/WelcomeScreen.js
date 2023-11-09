import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.welcomeText}>¡Bienvenido a nuestra App!</Text>
        <Text style={styles.subText}>Es un placer tenerte aquí.</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('SubscriptionScreen')
        }}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 80,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
})

export default WelcomeScreen
