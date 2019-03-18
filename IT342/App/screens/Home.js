import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput} from 'react-native';

import User from '../User';
console.log('####################');


export default class Gym extends React.Component {
  state = {
    height : '56',
    width : '',
    age : '',
  };
  User = (age, weight, height) => {};
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
<View style={styles.space}>
    <Text style={styles.text}>Length</Text>
   <TextInput 
   placeholder={"Enter your Length"}
   style={styles.textinput}
   onChangeText={(height) => this.setState({ height: height })}
   ></ TextInput>
   </View>
   
  
   <View style={styles.space}>
   <Text style={styles.text}>Weight</Text>
   <TextInput 
   placeholder={"Enter your Weight"} 
   style={styles.textinput}
   onChangeText={(weight) => this.setState({ weight: weight })}
   ></ TextInput>
   </View>
   
</View>
<View style={styles.up}>
<View style={styles.con1}> 


<View >
    <Text style={styles.text}>Age</Text>
    
   
   <TextInput 
   placeholder={"Enter your Age"} 
   style={styles.textinput1}
   onChangeText={(age) => this.setState({ age: age })}
   ></ TextInput>
  
  
   

   

   </View>
</View>
</View>

<TouchableOpacity onPress = {this.navigateToGym}
   style={styles.button}>
       <Text style={styles.bold} 
     >Enter</Text>
   </TouchableOpacity>

   

</View>
 
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555655',
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignItems: 'stretch',
    
  },
  text: {
    //alignItems: 'center',
    fontSize: 20,
    color:'#67BEFD',
     marginVertical:20,
     fontWeight: 'bold',
    },

    bold: {
      fontSize: 20,
      fontWeight: 'bold',
      
    },

    textinput1:{
        backgroundColor:'#fff',
        width: 160,
        height:40,
        //
        //marginRight:40

    },
    up:{
        marginTop:-70,
    },
    space:{
        marginHorizontal: 10,
    },
    

    textinput:{
        backgroundColor:'#fff',
        width: 160,
        height:40
    },

  button: {
    alignItems: 'center',
    backgroundColor: '#67BEFD',
    padding: 80,
    marginHorizontal: 80,
    paddingVertical: 20,
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth:1,
    borderRadius:12,
    marginTop:40,
   
    
    
},

button1: {
  alignItems: 'center',
  backgroundColor: '#67BEFD',
  padding: 10,
  marginHorizontal:60,
  borderRadius:8,
  justifyContent: 'center',
  marginTop:-38,
  left: 110
  },


con1:{
    flexDirection: 'row',
    padding: 65,
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 45,
    
},

con2:{
    flexDirection: 'column'
},


});