import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomePage';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
