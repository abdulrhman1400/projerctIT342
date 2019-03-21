import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';



export default class App extends React.Component {
    static navigationOptions = {
        title: 'Gym',

    };
    

  render() {
    return (

      <View style={styles.container}>
      <View style={styles.size}>
     <View
      style={styles.button} >
        
        <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/gym.png')}
        />
</View>
        
</View>
<View style={styles.size}>
       <View style={styles.button} >

 
       <Image
        style={{width: 100, height: 100}}
          source={require('./Assets/gym2.png')}
        />
</View>
        </View>



        <View style={styles.size}>
      <View
      style={styles.button}
>
<Image
        style={{width: 100, height: 100}}
          source={require('./Assets/gym3.png')}
        />
       
       
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
    padding: 5,
    marginHorizontal: 0,
    //paddingVertical: 45,
    //justifyContent: 'center',
    marginVertical:-170,
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
size: {
  padding: 50,
},
}
);