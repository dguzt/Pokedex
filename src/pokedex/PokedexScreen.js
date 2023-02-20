import { Text, View } from 'react-native';
import usePokemons, { useInfinitePokemons } from './usePokemons';
import { PokeList } from './PokeList';
import { useCallback } from 'react';

function PokedexScreen() {
  const { pokemons, setPages, pages, isLoading } = useInfinitePokemons();

  const loadMorePokemons = useCallback(() => setPages(pages + 1), [setPages]);

  if (isLoading) {
    return <Text>Is loading!</Text>;
  }

  return (
    <View>
      <PokeList
        pokemons={pokemons}
        loadMorePokemons={loadMorePokemons}
      />
    </View>
  );
}

export default PokedexScreen;
export const POKEDEX_SCREEN = 'POKEDEX_SCREEN';
