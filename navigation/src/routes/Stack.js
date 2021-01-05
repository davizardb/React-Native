import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassStack from '../components/PassStack'

const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName="TelaA">
    <Stack.Screen name="TelaA">
        {props => (
          <PassStack {...props} avancar="TelaB">
            <TelaA/>
          </PassStack>
        )}
    </Stack.Screen>
    <Stack.Screen name="TelaB">
        {props => (
          <PassStack {...props} avancar="TelaC" voltar>
            <TelaB/>
          </PassStack>
        )}
    </Stack.Screen>
    <Stack.Screen name="TelaC">
        {props => (
          <PassStack {...props} avancar="TelaC" voltar>
            <TelaC {...props}/>
          </PassStack>
        )}
    </Stack.Screen>
  </Stack.Navigator>
)