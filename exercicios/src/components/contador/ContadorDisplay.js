import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Estilo from '../estilo'

export default props => {
  return (
    <>
      <View style={style.Display}>
        <Text style={[Estilo.txtG, style.DisplayText]}>
          {props.num}
        </Text>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 250
  },
  DisplayText: {
    color: '#fff'
  }
})