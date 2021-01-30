import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://YOUR_LOCAL_IP:3000';

function showError(err) {
  if (err.response && err.response.data) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensage: ${err.response.data}`);
  } else {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`);
  }
}

function showSucess(msg) {
  Alert.alert('Sucesso!', msg);
}

export {server, showError, showSucess};
