import { Image } from 'react-native';

function Pokeball({ style = {} }) {
  return (
    <Image
      source={require('./assets/pokeball.png')}
      style={{ width: 70, height: 70, ...style }}
    />
  );
}

export default Pokeball;
