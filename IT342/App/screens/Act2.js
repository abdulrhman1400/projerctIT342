import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';



export default class App extends React.Component {
    static navigationOptions = {
        title: 'Active 2',

    };
    

    render() {
        return (
    
          <View style={styles.container}>
    
           
    
           <View style={styles.size}>
           <View style={styles.con2}>
            <View style={styles.button}>
                 <Image
                   style={{width: 100, height: 100}}
                   source={require('./Assets/gym3.png')}
                 />
           </View>
           </View>
           </View>
    
    
           <View style={styles.con2}>

            <View style={styles.spa}>

            <View>
            <Text style={styles.text}> 
            If you less than Perfect: 10</Text>
            </View>

            <View>
            <Text style={styles.text}>
             If you Perfect: 20 </Text>
             </View>

            <View>
            <Text style={styles.text}> 
            If you Greater than Perfect: 30 </Text>
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
        //alignItems: 'center',
        //justifyContent: 'center',
        alignItems: 'stretch',
        
      },
      text: {
        alignItems: 'center',
        color:'#fff',
        fontSize: 22,
        fontWeight: 'bold',
        //marginTop: -100,
        //marginHorizontal: 0,
        //paddingVertical: 45,
        justifyContent: 'center',
       marginVertical:10,
      },
      text1:{
        alignItems: 'center',
        color:'#67BEFD',
        fontSize: 22,
        //marginTop: -100,
        //marginHorizontal: 0,
        //paddingVertical: 45,
        justifyContent: 'center',
       marginVertical:10,

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
    spa:{
        marginVertical:130, 
        //marginHorizontal:10  
        left:50
    }
    }
    );