import { FlatList, ActivityIndicator } from 'react-native';
import PokeCard from './PokeCard';

function PokeList({ pokemons, loadMorePokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokeCard pokemonName={item.name} />}
      onEndReachedThreshold={0.4}
      onEndReached={loadMorePokemons}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          color="#0000FF"
        />
      }
    />
  );
}

export default PokeList;
