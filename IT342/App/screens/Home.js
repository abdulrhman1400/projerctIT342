import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput} from 'react-native';


import firebase from '../../Firebase';


export default class Gym extends React.Component {
  state = {
    height : '',
    weight : '',
    age : '',
    BMI: '',
  };
  User = (age, weight, height) => {};
    static navigationOptions = {
        title: 'Information',
        headerLeft: (
          <View></View>
        )
    };
    navigateToGym = () => {
      firebase.database().ref('user').set({
        height: this.state.height,
        weight: this.state.weight,
        age: this.state.age
      }).then(() => {
        //PMI = weight / (height*height);
        this.setState(
          {BMI: ( this.state.weight / (((this.state.height)/100)^2) ) }
          )
        if((this.state.BMI) >= 18.5 && (this.state.BMI) < 25){alert('Your BMI is ' + this.state.BMI + ' normal weight');};
        if((this.state.BMI) < 18.5){alert('BMI ' + this.state.BMI + ' underweight');};
        if((this.state.BMI) <= 30 && (this.state.BMI) >= 25){alert('Your BMI is ' + this.state.BMI + ' overweight');};
        if((this.state.BMI) > 30){alert('Your BMI is ' + this.state.BMI + ' you are fat');};
        this.props.navigation.navigate('Gym')
      });
    };
      
      render() {
        return (
    
              
    <View style={styles.container}>
    
    <View style={styles.con3}>
    
    <View style={styles.con2}>
         <View style={styles.space}>
    
         <Text style={styles.text1}> Height
          </Text>
        <TextInput 
           placeholder={"Enter your height"}
           style={styles.textinput}
           onChangeText={(height)=> this.setState({height: height})}
         >
        </TextInput>
         </View>
       </View>
    
       <View style={styles.con2}>
         <View style={styles.space}>
    
         <Text style={styles.text1}> Weight
          </Text>
        <TextInput 
           placeholder={"Enter your Weight"}
           style={styles.textinput}
           onChangeText={(weight)=> this.setState({weight: weight})}
         >
        </TextInput>
         </View>
       </View>
    
    
       <View style={styles.con2}>
         <View style={styles.space}>
    
         <Text style={styles.text1}> Age
          </Text>
        <TextInput 
           placeholder={"Enter your Age"}
           style={styles.textinput}
           onChangeText={(age)=> this.setState({age: age})}
         >
        </TextInput>
         </View>
       </View>
    
    <TouchableOpacity onPress = {this.navigateToGym}
       style={styles.button}>
           <Text style={styles.bold} 
         >Enter</Text>
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
        
      },
      text: {
        //alignItems: 'center',
       justifyContent: 'center',
        //alignItems: 'stretch',
        fontSize: 22,
        color:'#67BEFD',
         //marginVertical:20,
         fontWeight: 'bold',
         left:-80,
        },
    
        text1: {
            //alignItems: 'center',
           justifyContent: 'center',
            //alignItems: 'stretch',
            fontSize: 22,
            color:'#67BEFD',
             //marginVertical:20,
             fontWeight: 'bold',
             left:-100,
            },
    
            text2: {
                //alignItems: 'center',
               justifyContent: 'center',
                //alignItems: 'stretch',
                fontSize: 22,
                color:'#67BEFD',
                 //marginVertical:20,
                 fontWeight: 'bold',
                 left:-40,
                },
    
                text5: {
                    alignItems: 'center',
                    //alignItems: 'stretch',
                    justifyContent: 'center',
                    fontSize: 18,
                    color: 'black',
                     //marginVertical:-100,
                    //marginHorizontal: 110,
                     //fontWeight: 'bold',
                     left:80,
                    },
    
        bold: {
          fontSize: 21,
          fontWeight: 'bold',
          
        },
    
        textinput1:{
            backgroundColor:'#fff',
            width: 250,
            height:50,
            //
            //marginRight:40
            borderWidth:1,
            borderRadius:12,
    
    
        },
        tex:{
        alignItems: 'center',
        fontSize: 20,
        color:'black',
         marginVertical:20,
         fontWeight: 'bold',
        },
        up:{
            marginTop:-70,
        },
        space:{
            alignItems: 'center',
            justifyContent: 'center',
            //marginVertical: 40,
            
        },
        textinput:{
            backgroundColor:'#fff',
            width: 260,
            height:50,
            borderWidth:1,
            //borderRadius:3,
            //alignItems: 'center',
            //paddingVertical:30
            marginVertical: 10,
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
        //padding: 65,
        //marginHorizontal: 10,
        //justifyContent: 'center',
       // paddingVertical: 45,
        
    },
    
    con2:{
        flexDirection: 'column'
    },
    con3:{
        //justifyContent: 'center',
        //alignItems: 'center',
        //marginTop:5,
        marginVertical:100,
    }
    
    
    });