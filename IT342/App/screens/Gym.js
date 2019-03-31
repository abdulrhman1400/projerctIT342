import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Button } from 'react-native';

import User from '../User';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Activities',
        
        headerLeft: (
          <View></View>
        )
    };
    
    navigateToGym2 = () => {
      // if(PMI < 18.5){

      // };
      this.props.navigation.navigate('Gym2')
    };
    navigateToCalories = () => {
      this.props.navigation.navigate('Calories')
    };
    navigateToSettings = () => {
      this.props.navigation.navigate('Settings')
    };

    navigateToBmi = () => {
      this.props.navigation.navigate('Bmi')
    };

  render() {
    return (

      <View style={styles.container}>

     <View style={styles.con1}>
      <TouchableOpacity onPress = {this.navigateToGym2}
      style={styles.button} >
        
        <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/exercise.png')}
        />

        </TouchableOpacity>


       <TouchableOpacity onPress = {this.navigateToCalories}
       style={styles.button} >

 
       <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/calories.png')}
        />

        </TouchableOpacity>

</View>


<View style={styles.con1}>
<View style={styles.top}>
      <TouchableOpacity onPress = {this.navigateToBmi}
      style={styles.button} >
        
        <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/body-mass-index.png')}
        />

        </TouchableOpacity>
        </View>

        <View style={styles.con1}>
<View style={styles.top}>
       <TouchableOpacity onPress = {this.navigateToSettings}
       style={styles.button} >

 
       <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/settings-gears.png')}
        />

        </TouchableOpacity>
        </View>
</View>
       </View>

      </View>
    );
    console.log('####################');
  }}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555655',
    alignItems: 'center',
    //justifyContent: 'center',
    alignItems: 'stretch',
    
  },
  text: {
    alignItems: 'center',
    
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#67BEFD',
    padding: 30,
    marginHorizontal: 10,
    //paddingVertical: 45,
    //justifyContent: 'center',
    //marginVertical: 10,
    borderWidth:1,
    borderRadius:12,
    marginTop: 100,
    left: 1
    
},

con1:{
    flexDirection: 'row',
    //flex: 0,
    //margin:10,
},

con2:{
    flexDirection: 'column'
},

top:{
  marginTop: -80,
},
con3:{
  marginVertical:150,
}
}
);