import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/MainNav';
import 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}

export default App;
