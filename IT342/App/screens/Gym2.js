import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';



export default class App extends React.Component {
    static navigationOptions = {
        title: 'Gym',


    };
        navigateToAct1 = () => {
      this.props.navigation.navigate('Act1')
    };
    navigateToAct2 = () => {
      this.props.navigation.navigate('Act2')
    };
    navigateToAct3 = () => {
      this.props.navigation.navigate('Act3')
    };

  render() {
    return (

      <View style={styles.container}>
         <ScrollView>

        <View style={styles.top}>

       <View style={styles.size}>
       <TouchableOpacity onPress = {this.navigateToAct1}
        style={styles.button}>
             <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/stretching-exercises.png')}
             />
       </TouchableOpacity>
       </View>



         
        

       <View style={styles.size}>
       <TouchableOpacity onPress = {this.navigateToAct2}
        style={styles.button}>
             <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/gym3.png')}
             />
       </TouchableOpacity>
       </View>




       <View style={styles.size}>
       <TouchableOpacity onPress = {this.navigateToAct3}
        style={styles.button} >
             <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/gym4.png')}
             />
       </TouchableOpacity>
       </View>


       </View>

       </ScrollView>
       </View>
       
         
    );
    console.log('####################');
  }}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555655',
    //alignItems: 'center',
    //justifyContent: 'center',
    alignItems: 'stretch',
    
  },
  text: {
    alignItems: 'center',
    marginTop: 130,
    //marginHorizontal: 0,
    //paddingVertical: 45,
    //justifyContent: 'center',
    marginVertical:-140,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#67BEFD',
    padding: 35,
    marginHorizontal: 10,
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
  alignItems: 'top',
  justifyContent: 'center',
  alignItems: 'stretch',
},
}
);