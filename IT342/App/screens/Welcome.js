import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';


export default class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',

    };
    
    
    navigateToHome = () => {
        this.props.navigation.navigate('Home')
      };
    
    

  render() {
    return (
      
        <View style={styles.container}>

        <Text style={styles.text}>Welcome  <Text style={styles.text1}>to this application that will help you find out the activities that are right for you and the number of calories in some foods. </Text>
</Text>
<TouchableOpacity onPress = {this.navigateToHome}>
       <Text style={styles.text2}> Get Start</Text>
   </TouchableOpacity>

</View>

);}}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#555655',
      //alignItems: 'center',
      //justifyContent: 'center',
      //alignItems: 'stretch',
      
    },
    text: {
      alignItems: 'center',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: 45,
      color:'#67BEFD',
       marginVertical:200,
       marginHorizontal: 40,
       fontWeight: 'bold',
      },
      text1: {
        //alignItems: 'center',
        alignItems: 'stretch',
        //justifyContent: 'center',
        fontSize: 25,
        color:'#ffff',
         marginVertical:-200,
         marginHorizontal: 40,
         fontWeight: 'bold',
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
      marginTop:-150,
     
      
      
  },
  text2: {
              alignItems: 'center',
              //alignItems: 'stretch',
              justifyContent: 'center',
              fontSize: 30,
              color: 'black',
               marginVertical:-100,
               marginHorizontal: 120,
               fontWeight: 'bold',
              },


});
