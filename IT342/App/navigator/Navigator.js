import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";


import Home from '../screens/Home';
import Gym from '../screens/Gym';
import Gender from'../screens/Gender';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Gym: { screen: Gym },
    Gender: {screen: Gender},
    
    
    

  });

  
  export default createAppContainer(AppNavigator);
  