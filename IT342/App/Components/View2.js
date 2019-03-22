import react from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

const View2 = (props) => {

    <View style={styles.container}>
    <ScrollView>

   <View style={styles.top}>

  <View style={styles.size}>
    <View style={styles.button}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./Assets/gym.png')}
        />
   </View>
   </View>
  <View style={styles.text}>
    <Text>Hi my freind Hi my freind Hi my freind </Text>
  </View>




  <View style={styles.size}>
   <View style={styles.button}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./Assets/stretching-exercises.png')}
        />
  </View>
  </View>
  <View style={styles.text}>
    <Text>Hi my freind Hi my freind Hi my freind Hi my freind</Text>
  </View>



  <View style={styles.size}>
   <View style={styles.button}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./Assets/gym2.png')}
        />
  </View>
  </View>
      <View style={styles.text}>
         <Text>Hi my freind Hi my freind Hi my freind Hi my freind </Text>
      </View>



  <View style={styles.size}>
   <View style={styles.button}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./Assets/gym3.png')}
        />
  </View>
  </View>
  <View style={styles.text}>
    <Text> Hi my freind</Text>
  </View>



  <View style={styles.size}>
   <View style={styles.button} >
        <Image
          style={{width: 100, height: 100}}
          source={require('./Assets/gym4.png')}
        />
  </View>
  </View>
  <View style={styles.text}>
    <Text> Hi my freind</Text>
  </View>
  </View>


  </ScrollView>
  </View>
  
};

export default View2;