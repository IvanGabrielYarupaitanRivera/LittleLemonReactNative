import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RootNavigator from './navigators/RootNavigator'

const Stack = createNativeStackNavigator()

export default function App() {
  return <RootNavigator />
}
