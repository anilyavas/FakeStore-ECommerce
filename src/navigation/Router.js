import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../app/Product';
import Details from '../app/Detail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Products'
          component={Products}
          options={{
            title: 'FakeStore',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name='Detail'
          component={Details}
          options={{
            title: 'Details',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
