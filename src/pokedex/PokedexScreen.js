import { Text } from 'react-native';
import View from '../common/layout/View';
import usePokemons from './usePokemons';

function PokedexScreen() {
  const { pokemons, error, isLoading } = usePokemons();
  console.log('POKEMONS: ', error, isLoading, pokemons);

  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}

export default PokedexScreen;
export const POKEDEX_SCREEN = 'POKEDEX_SCREEN';
