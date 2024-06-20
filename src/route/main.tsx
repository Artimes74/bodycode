import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MAIN_ROUTE_TYPE} from '../type/route/stackRouteType.ts';
import Home from '../screen/home/home.tsx';
import SelectedCategory from '../screen/selectedCategory/SelectedCategory.tsx';
import Result from '../screen/result.tsx';
import Types from '../screen/type/types.tsx';
import Type2 from '../screen/type2/type2.tsx';
import Type3 from '../screen/type3/type3.tsx';
import Type4 from '../screen/type4/type4.tsx';
import Type5 from '../screen/type5/type5.tsx';
import Type6 from '../screen/type6/type6.tsx';

const MainStackProps = createStackNavigator<MAIN_ROUTE_TYPE>();

const MainStack = () => (
  <NavigationContainer>
    <MainStackProps.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackProps.Screen name="home" component={Home} />
      <MainStackProps.Screen name="categories" component={SelectedCategory} />
      <MainStackProps.Screen name="type" component={Types} />
      <MainStackProps.Screen name="type2" component={Type2} />
      <MainStackProps.Screen name="type3" component={Type3} />
      <MainStackProps.Screen name="type4" component={Type4} />
      <MainStackProps.Screen name="type5" component={Type5} />
      <MainStackProps.Screen name="type6" component={Type6} />
      <MainStackProps.Screen name="result" component={Result} />
    </MainStackProps.Navigator>
  </NavigationContainer>
);
export default MainStack;
