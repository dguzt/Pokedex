import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pokeball from './common/Pokeball';
import { ACCOUNT_NAV, AccountNav } from './account';
import { POKEDEX_NAV, PokedexNav } from './pokedex';
import { FAVOURITES_SCREEN, FavouritesScreen } from './favourites';

const Tab = createBottomTabNavigator();

function MainNav() {
  return (
    <Tab.Navigator initialRouteName={POKEDEX_NAV}>
      <Tab.Screen
        name={FAVOURITES_SCREEN}
        component={FavouritesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="heart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name={POKEDEX_NAV}
        component={PokedexNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Pokedex',
          tabBarIcon: () => <Pokeball style={{ top: -25 }} />,
        }}
      />

      <Tab.Screen
        name={ACCOUNT_NAV}
        component={AccountNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="user"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNav;
