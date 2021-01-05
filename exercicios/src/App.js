import React from 'react';
import { View, StyleSheet } from 'react-native';

import Mega from './components/mega/Mega'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import Diferenciar from './components/Diferenciar'
// import Contador from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Contador from './components/Contador';
// import Botao from './components/Botao'
// import Aleatorio from './components/Aleatorio';
// import First from './components/First';
// import MinMax from './components/MinMax';
// import X, { Comp1, Comp2 } from './components/Multi';

export default () =>
  (
    <View style={style.App}>
      <Mega/>
      {/* <X/>
      <DigiteSeuNome/>
      <Diferenciar/>
      <Contador/>
      <Pai/>
      <Comp1/>
      <Comp2/>
      <First/> */}
      {/* <MinMax min="3" max="20"/> */}
      {/* <Aleatorio min={1} max={10}/> */}
      {/* <Botao/> */}
      {/* <Contador/>
      <Contador inicial={1000} passo={3000}/> */}
    </View>
  )

const style = StyleSheet.create({
  App: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
})
