import React from 'react';
import { StyleSheet, Text, View, Picker, Button} from 'react-native';
 class Gender extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          sex: ''
          
            
        };
      
       
    }
      
  
    render(){
      return (
        <View >
          <Picker
            selectedValue={this.state.sex}
            onValueChange={(itemValue) => this.setState({sex: itemValue})}
            >
            
           
            <Picker.Item label="M" value="1"  />
            <Picker.Item label="F" value="2" />
          </Picker>
          
        </View>
      );
    }
  
}
 
  
export default Gender ;
  
  