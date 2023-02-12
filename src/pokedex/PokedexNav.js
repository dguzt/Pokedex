import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from './PokedexScreen';
import { PokemonScreen } from './pokemon';

const Stack = createStackNavigator();

function PokedexNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          title: 'Pokedex',
        }}
      />

      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Pokemon',
        }}
      />
    </Stack.Navigator>
  );
}

export default PokedexNav;
export const POKEDEX_NAV = 'POKEDEX_NAV';
