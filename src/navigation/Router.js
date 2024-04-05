import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../app/Product';
import Details from '../app/Detail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Detail' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
