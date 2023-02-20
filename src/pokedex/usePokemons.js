import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../common/requests';
import Constants from 'expo-constants';
import { useCallback } from 'react';
import { flatten, pipe, pluck } from 'ramda';

function useInfinitePokemons({ page = 1, limit = 10 } = {}) {
  const url = Constants.expoConfig.extra.apiUrl;

  const getPokemonPageKey = useCallback(
    (pageIndex, previousPageData) => {
      console.log('keys => ', pageIndex);
      if (previousPageData && !previousPageData.results?.length) return null;

      return ['/pokemon/', pageIndex, limit];
    },
    [limit]
  );

  const { data, size, setSize, error, isLoading } = useSWRInfinite(
    getPokemonPageKey,
    ([uri, p, l]) => fetcher(url, uri, { params: { offset: p * l, limit: l } })
  );

  return { pokemons: flatAllData(data), pages: size, setPages: setSize, error, isLoading };
}

function flatAllData(data) {
  return pipe(pluck('results'), flatten)(data ?? []);
}

export { useInfinitePokemons };
