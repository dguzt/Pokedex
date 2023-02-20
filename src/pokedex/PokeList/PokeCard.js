import { Text, View, StyleSheet, Image } from 'react-native';
import usePokemon from './usePokemon';
import { getColorByType, POKEMON_TYPE_COLORS } from './colors';

function PokeCard({ pokemonName }) {
  const { pokemon, isLoading } = usePokemon({ pokemonId: pokemonName });

  if (isLoading) {
    return <Text>IS LOADING</Text>;
  }

  const color = getColorByType(pokemon.type);
  const cardStyles = { ...styles.card, backgroundColor: color };

  return (
    <View style={cardStyles}>
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      <Text style={styles.pokemonOrder}>#{`${pokemon.order}`.padStart(3, '0')}</Text>
      <Image
        source={{ uri: pokemon.image }}
        style={styles.pokemonImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  pokemonName: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    height: 'auto',
    width: '100%',
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pokemonOrder: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#FFF',
    fontSize: 10,
  },
  pokemonImg: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export default PokeCard;
