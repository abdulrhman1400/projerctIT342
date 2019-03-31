import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
    static navigationOptions = {
        title: 'BMI',
         
    };
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['BMI', 'Body State'],
      tableData: [
        ['Less than 15', 'Very severe weight loss'],
        ['From 15 to 16', 'Sever weight loss'],
        ['From 16 to 18.5', 'Underweighted'],
        ['From 18.5 to 25', 'Normal weighted'],
        ['From 25 to 30', 'Overweighted'],
        ['From 30 to 35', 'First degree obesity'],
        ['From 35 to 40', 'Second degree obesity'],
        ['More than 40', 'Super obesity'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.space}>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#555655' },
  head: { height: 40, backgroundColor: '#67BEFD' },
  space: {
    top: '25%',
  },
  text: { margin: 6, color: '#fff' }
});