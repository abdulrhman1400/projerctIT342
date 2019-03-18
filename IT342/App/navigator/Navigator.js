import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";

import Welcome from'../screens/Welcome';
import Home from '../screens/Home';
import Gym from '../screens/Gym';



const AppNavigator = createStackNavigator({
    Welcome:{screen: Welcome},
    Home: { screen: Home },
    Gym: { screen: Gym },
    
    
    
    

  });

  
  export default createAppContainer(AppNavigator);
  