import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";

import Welcome from'../screens/Welcome';
import Home from '../screens/Home';
import Gym from '../screens/Gym';
import Gym2 from '../screens/Gym2';
import Calories from '../screens/Calories';
import Settings from '../screens/Settings';
import Act1 from '../screens/Act1';
import Act2 from '../screens/Act2';
import Act3 from '../screens/Act3';

const AppNavigator = createStackNavigator({
    Welcome:{screen: Welcome},
    Home: { screen: Home },
    Gym: { screen: Gym },
    Gym2: {screen: Gym2},
    Calories: {screen: Calories},
    Settings: {screen: Settings},
    Act1: {screen: Act1},
    Act2: {screen: Act2},
    Act3: {screen: Act3},

    
    
    

  });

  
  export default createAppContainer(AppNavigator);
  