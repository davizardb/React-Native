import React from 'react'
import { Platform, Text } from 'react-native'

export default props => {
  if (Platform.OS === 'android') {
      return <Text>Android</Text>
  } else if (Platform.OS === 'ios') {
      return <Text>IOS</Text>
  } else {
    return <Text>Eita!</Text>
  }
    
}
