import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';


export default class Gym extends React.Component {
    static navigationOptions = {
        title: 'Gym',

    };
    
    
    navigateToGender = () => {
      this.props.navigation.navigate('Gender')
    };
    

  render() {
    return (
      
      

<View style={styles.container}>
    <View style={styles.con1}>
<View style={styles.space}>
    <Text style={styles.text}>Length</Text>
   < TextInput  style={styles.textinput}></ TextInput>
   </View>

   <View style={styles.space}>
   <Text style={styles.text}>Weight</Text>
   < TextInput style={styles.textinput}></ TextInput>
   </View>
   
</View>
<View style={styles.up}>
<View style={styles.con1}> 


<View >
    <Text style={styles.text}>Age</Text>
    
   
   < TextInput placeholder={"Enter your Age"} style={styles.textinput1}></ TextInput>
  
  <View style={styles.button1}>
  <TouchableOpacity onPress={
            this.navigateToGender
          }>
            <View style={styles.findView}>
            
                <Text style={styles.findView}>Gender</Text>

           </View>

           
</TouchableOpacity>

  
  </View>
   

   

   </View>
</View>
</View>

<TouchableOpacity
   style={styles.button}>
       <Text style={styles.bold}>Sub</Text>
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
     marginVertical:20
    },

    bold: {
      fontSize: 20,
      fontWeight: 'bold',
      
    },

    textinput1:{
        backgroundColor:'#fff',
        width: 20,
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
        width: 100,
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