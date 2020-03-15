import React, {useEffect, useState} from 'react';
import {Container, Texto, Buttao, Textobut} from './styles';
import {Text, Button} from 'react-native';

export default function App() {
  const [dino, setDino] = useState(true);
  const [count, setCount] = useState(true);

  function handleDino() {
    dino === false ? setDino(true) : setDino(false);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  function haddleGeral() {
    handleDino();
    handleIncrement();
  }

  return (
    <Container dino={dino}>
      <Texto dino={dino}>textInComponent</Texto>
      <Buttao onPress={haddleGeral}>
        <Textobut>Butao</Textobut>
      </Buttao>
      <Texto dino={dino}>Count: {count}</Texto>
      <Button title="ADD" onPress={handleIncrement} />
    </Container>
  );
}
