import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => (props.dino ? '#fff' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Texto = styled.Text`
  color: ${props => (props.dino ? 'red' : '#fff')};
  text-transform: ${props => (props.dino ? 'none' : 'uppercase')};
  font-weight: bold;
  font-size: 24px;
`;

export const Buttao = styled.TouchableOpacity`
  height: 44;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: #7a91ca;
  border-radius: 3;
`;
export const Textobut = styled.Text`
  color: ${props => (props.davo ? '#fff' : 'red')};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;
