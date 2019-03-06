import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',

    };
    navigateToGym = () => {
      this.props.navigation.navigate('Gym')
    };
  render() {
    return (

      
      <View style={styles.container}>
      
      

      <View style={styles.con1}>
      <TouchableOpacity onPress = {this.navigateToGym}
      style={styles.button} 
>

             
             
              
             
        <Text style={styles.text} >Gym</Text>
    
       </TouchableOpacity> 
       
       <TouchableOpacity
      style={styles.button}
>

        <Text style={styles.text}>Home</Text>

       </TouchableOpacity> 
       </View>




       <View style={styles.con1}>
      <TouchableOpacity
      style={styles.button}
>

        <Text >Home</Text>

       </TouchableOpacity> 
       
       <TouchableOpacity
      style={styles.button}
>

        <Text >Home</Text>
        

       </TouchableOpacity> 
       
       </View>
       
       
      </View>
      


    );
  }
}

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
    padding: 65,
    marginHorizontal: 10,
    paddingVertical: 45,
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth:1,
    borderRadius:12,
    marginTop: 100,
    left: 1

    
   
   
    
    
},

con1:{
    flexDirection: 'row'
    
},

con2:{
    flexDirection: 'column'
},
}
);