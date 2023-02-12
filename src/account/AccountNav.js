import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';

const Stack = createStackNavigator();

function AccountNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mi Cuenta"
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
}

export default AccountNav;
export const ACCOUNT_NAV = 'ACCOUNT_NAV';
