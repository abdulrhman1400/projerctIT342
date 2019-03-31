import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';



export default class App extends React.Component {
    static navigationOptions = {
        title: 'Calories',

    };
    render() {
      return (
  
   <View style={styles.container}>
        <ScrollView>


        <View style={styles.top}>
        
          <View style={styles.con1}>
           <View style={styles.con2}>

              <View style={styles.button}>
                <Image
                 style={{width: 100, height: 100}}
                 source={require('./Assets/rice.png')}
                 /> 

               </View>
               <View style={styles.text}>
               <Text style={styles.text}>Rice: 138 Cal</Text>
             </View>

           </View>

          <View style={styles.con2}>

          <View style={styles.button}>
              <Image
                style={{width: 100, height: 100}}
                source={require('./Assets/chicken.png')}
               /> 

           </View>
           <View style={styles.text}>
              <Text style={styles.text}>Chicken: 240 Cal</Text>
           </View>


           </View>
         </View>

  
         <View style={styles.top}>

         <View style={styles.con1}>
          <View style ={styles.con2}>

          <View style={styles.button}>
             <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/fish.png')}
               />
           </View>

          <View style={styles.text}>
              <Text style={styles.text}>Fish: 190 Cal</Text>
         </View>

         </View>

         <View style ={styles.con2}>

          <View style={styles.button}>
            <Image
              style={{width: 100, height: 100}}
              source={require('./Assets/meat.png')}
             />
        </View>

        <View style={styles.text}>
              <Text style={styles.text}>Meat: 143 Cal</Text>
         </View>

       </View>
       </View>
       </View>   
       </View>   
  
   <View style={styles.top}>

      <View style={styles.con1}>
      <View style={styles.con2}>

        <View style={styles.button}>
          <Image
            style={{width: 100, height: 100}}
            source={require('./Assets/fast-food.png')}
           />
        </View>

        <View style={styles.text}>
             <Text style={styles.text}>Fast-food: 590 Cal</Text>
        </View>

      </View>

<View style={styles.con2}>

   <View style={styles.button}>
      <Image
       style={{width: 100, height: 100}}
       source={require('./Assets/pizza.png')}
      />
   </View>

       <View style={styles.text}>
          <Text style={styles.text}>Pizza: 232 Cal</Text>
      </View>

   </View>
  </View>

    <View style={styles.top}>

    <View style={styles.con1}>
    <View style={styles.con2}>

    <View style={styles.button}>
      <Image
       style={{width: 100, height: 100}}
       source={require('./Assets/tea.png')}
      />
   </View>

   <View style={styles.text}>
        <Text style={styles.text}>Tea: 5 Cal</Text>
  </View>

</View>

<View style={styles.con2}>

   <View style={styles.button}>
      <Image
       style={{width: 100, height: 100}}
       source={require('./Assets/coffee-cup.png')}
      />
   </View>

   <View style={styles.text}>
         <Text style={styles.text}>Coffee: 9 Cal</Text>
  </View>

   </View>
   </View>
   </View>
   </View>


   
   <View style={styles.top}>
        
        <View style={styles.con1}>
         <View style={styles.con2}>

            <View style={styles.button}>
              <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/milk.png')}
               /> 

             </View>
             <View style={styles.text}>
             <Text style={styles.text}>Milk: 42 Cal</Text>
           </View>

         </View>

        <View style={styles.con2}>

        <View style={styles.button}>
            <Image
              style={{width: 100, height: 100}}
              source={require('./Assets/juice.png')}
             /> 

         </View>
         <View style={styles.text}>
            <Text style={styles.text}>Juice: 82 Cal</Text>
         </View>


         </View>
       </View>


       <View style={styles.top}>

       <View style={styles.con1}>
        <View style ={styles.con2}>

        <View style={styles.button}>
           <Image
             style={{width: 100, height: 100}}
             source={require('./Assets/shawarma.png')}
             />
         </View>

        <View style={styles.text}>
            <Text style={styles.text}>Shawarma: 430 Cal</Text>
       </View>

       </View>

       <View style ={styles.con2}>

        <View style={styles.button}>
          <Image
            style={{width: 100, height: 100}}
            source={require('./Assets/grill.png')}
           />
      </View>

      <View style={styles.text}>
            <Text style={styles.text}>Barbecue: 361 Cal</Text>
       </View>

     </View>
     </View>
     </View>   
     </View>   

 
     <View style={styles.top}>
        
        <View style={styles.con1}>
         <View style={styles.con2}>

            <View style={styles.button}>
              <Image
               style={{width: 100, height: 100}}
               source={require('./Assets/ttt.png')}
               /> 

             </View>
             <View style={styles.text}>
             <Text style={styles.text}>Cheese: 390 Cal</Text>
           </View>

         </View>

        <View style={styles.con2}>

        <View style={styles.button}>
            <Image
              style={{width: 100, height: 100}}
              source={require('./Assets/spaguetti.png')}
             /> 

         </View>
         <View style={styles.text}>
            <Text style={styles.text}>Spaguetti: 134 Cal</Text>
         </View>


         </View>
       </View>


       <View style={styles.top}>

       <View style={styles.con1}>
        <View style ={styles.con2}>

        <View style={styles.button}>
           <Image
             style={{width: 100, height: 100}}
             source={require('./Assets/bread.png')}
             />
         </View>

        <View style={styles.text}>
            <Text style={styles.text}>Bread: 17 Cal</Text>
       </View>

       </View>

     </View>
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
      alignItems: 'center',
      //justifyContent: 'center',
      alignItems: 'stretch',
      
    },
    text: {
      alignItems: 'center',
      fontSize: 18,
      color:'#fff',
      fontWeight: 'bold',
    },
    text1:{
      alignItems: 'center',

      left:100,

    },
  
    button: {
      alignItems: 'center',
      backgroundColor: '#67BEFD',
      padding: 30,
      marginHorizontal: 10,
      borderWidth:1,
      borderRadius:12,
      marginTop: 100,
      left: 1  
  },
  
  con1:{
      flexDirection: 'row',
  },
  
  con2:{
      flexDirection: 'column'
  },
  
  top:{
    marginTop: -80,
  },
  }
  );