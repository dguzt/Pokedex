import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SWRConfig } from 'swr';
import Constants from 'expo-constants';
import { fetcher } from './src/common/requests';
import MainNav from './src/MainNav';

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 600_000,
      }}
    >
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </SWRConfig>
  );
}

export default App;
