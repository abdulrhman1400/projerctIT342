import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Gym',

    };
    
    

  render() {
    return (

      <View style={styles.container}>

     <View style={styles.con1}>
      <TouchableOpacity 
      style={styles.button} >
        
        <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/exercise.png')}
        />

        </TouchableOpacity>
       
       <TouchableOpacity style={styles.button} >

      
       <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/calories.png')}
        />

        </TouchableOpacity>

</View>


       <View style={styles.con1}>
      <TouchableOpacity
      style={styles.button}
>
<Image
        style={{width: 100, height: 100}}
          source={require('./Assets/settings-gears.png')}
        />
       </TouchableOpacity> 
       
       
       
       </View>
 
       
      </View>
    );
  
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
}
);