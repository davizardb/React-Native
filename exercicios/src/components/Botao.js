import React from 'react'
import { Button } from 'react-native'

export default props => {

  function execute() {
    console.warn("Execcc")
  }
  
  return (  
      <Button
        title="Executar"
        onPress={execute}
      />
  )
}
