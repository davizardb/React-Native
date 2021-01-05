import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function MinMax(param) {
  return (
  <Text style={Estilo.txtG}>O valor  {param.max} é maior que o valor {param.min}!</Text>  
  )
}
