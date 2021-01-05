import React from 'react'
import { View, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
  return (
   <View style={{flex:1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Button
        title="Abrir"
        onPress={() => {
          props.navigation.openDrawer()
          // setTimeout(()=>{
          //   props.navigation.closeDrawer()
          //   setInterval(()=>{
          //     props.navigation.toggleDrawer()
          //   }, 1000)
          // }, 3000)
        }}
      />
    </View>
    <View style={{flex:1}}>
      <TextoCentral corFundo='#33aa32cd'>
        Tela D
      </TextoCentral>      
    </View>
   </View>
  )
}
