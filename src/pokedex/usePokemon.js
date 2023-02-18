import useSWR from 'swr';
import { fetcher } from '../common/requests';
import Constants from 'expo-constants';

function usePokemon({ pokemonId }) {
  const url = Constants.expoConfig.extra.apiUrl;
  const { data, error, isLoading } = useSWR(`/pokemon/${pokemonId}`, ([uri, ...rest]) =>
    fetcher(url, uri, {})
  );

  const pokemon = getPokemonFromData(data);

  return { pokemon, error, isLoading };
}

function getPokemonFromData(data) {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    type: data.type[0].type.name,
    order: data.order,
    image: data.sprites.other['official-artwork']['front_default'],
  };
}

export default usePokemon;
