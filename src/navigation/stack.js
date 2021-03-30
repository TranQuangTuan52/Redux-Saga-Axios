import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
import Home from '../screens/home'
import Login from '../screens/login'
import Signup from '../screens/signup'
import AddProduct from '../screens/addProduct';
const stack = () => {
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName = 'Home' > 
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name = 'AddProduct' component = {AddProduct} />
       </Stack.Navigator>
    )
}

export default stack
