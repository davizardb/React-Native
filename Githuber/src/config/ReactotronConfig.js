import Reactotron, {asyncStorage} from 'reactotron-react-native';

const tron = Reactotron.configure({
  // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  name: 'React Native Demo',
  host: '192.168.0.104',
});
Reactotron.configure()
  .use(asyncStorage()) // <--- here we go!
  .connect();

tron.clear();
console.tron = tron;
