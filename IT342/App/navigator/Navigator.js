import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";

import Welcome from'../screens/Welcome';
import Home from '../screens/Home';
import Gym from '../screens/Gym';
import Gym2 from '../screens/Gym2';



const AppNavigator = createStackNavigator({
    Welcome:{screen: Welcome},
    Home: { screen: Home },
    Gym: { screen: Gym },
    Gym2: {screen: Gym2},
    
    
    

  });

  
  export default createAppContainer(AppNavigator);
  