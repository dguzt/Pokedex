import { Text } from 'react-native';
import View from '../../common/Layout/View';

function PokemonScreen() {
  return (
    <View>
      <Text>Pokemon!</Text>
    </View>
  );
}

export default PokemonScreen;
export const POKEMON_SCREEN = 'POKEMON_SCREEN';
