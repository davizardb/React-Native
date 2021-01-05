import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Filho  from './Filho'

export default props => {

  const [text, setText] = useState('')
  const [num, setNum] = useState(0)

  function exibirValor(numero, inicio) {
    setNum(numero)
    setText(inicio)
  }

  return (
    <>
      <Text style={Estilo.txtG}>
        {text}{num}
      </Text>
      <Filho
        min={1}
        max={60}
        funcao={exibirValor}
      />
    </>
  )
}
