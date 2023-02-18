import useSWR from 'swr';
import { fetcher } from '../common/requests';
import Constants from 'expo-constants';
import { filter, map, pipe, pluck } from 'ramda';
import usePokemon from './usePokemon';

function usePokemons({ page = 1, limit = 10 } = {}) {
  const url = Constants.expoConfig.extra.apiUrl;
  const { data, error, isLoading } = useSWR(['/pokemon/', page, limit], ([uri, p, l]) =>
    fetcher(url, uri, { params: { page: p, limit: l } })
  );

  return { pokemons: data?.results ?? [], error, isLoading };
}

export default usePokemons;
