            import React, { Component } from 'react';
            import { StyleSheet, Text, TextInput, View, Button ,FlatList, Dimensions,TouchableOpacity, Alert} from 'react-native';
            import Constants from 'expo-constants';




            export default class CalculatorApp extends Component {
             constructor(props){
                    super(props);
                    this.state={
                        num1: 0,
                        oper: null,
                        text: '',
                        count: 0,
                        try: 0,
                    }
                }

               getOperator = (number, type) => {
                    switch (type) {
                        case 'N':
                             if (this.state.try == 0) {
                                 this.setState({
                                     text: this.state.text + number
                                 })
                             }
                             else {
                                 this.getResult()
                             }
                                 break;
                         case 'O':
                             if (this.state.count == 0) {
                                 this.setState({
                                     num1: this.state.text, text: '', oper: number, count: 1, try: 0
                                 })
                             } else {
                                 this.setState({
                                      count: 0, try: 1
                                 })
                                 this.getResult()
                             }
                                 break;

                        case 'E':

                             this.getResult()
                                 break;
                         case 'C':
                             this.setState({
                                 num1: 0,
                                 oper: null,
                                 text: '',
                                 count: 0,
                                 try: 0,
                             })
                                 break;

                  }
                }

                getResult() {
                        switch (this.state.oper) {
                       case '-':
                           this.setState({
                               text: parseFloat(this.state.num1) - parseFloat(this.state.text), num1: this.state.text
                           })
                               break;
                       case '+':
                           this.setState({
                               text: parseFloat(this.state.num1) + parseFloat(this.state.text), num1: this.state.text
                           })
                               break;
                           case '÷':
                           if (parseFloat(this.state.text) != 0) {
                               this.setState({
                                   text: parseFloat(this.state.num1) / parseFloat(this.state.text), num1: this.state.text
                               })
                           } else {
                               this.setState({
                                   text: 'ERROR', num1: 0, oper: null, count: 0, try: 0,
                               })
                           }
                               break;
                       case 'x':
                           this.setState({
                               text: parseFloat(this.state.num1) * parseFloat(this.state.text), num1: this.state.text
                           })
                       break;
                  }
                }

                render() {
                    return (
                        <View style={styles.MainContainer}>

                            <View style={styles.TextContainer}>
                            <Text style={{ fontSize: 30, fontWeight:'bold', padding: 5,height:50}}>Calculator App</Text>
                                <Text style={{ fontSize: 30, margin: 15, height: 50 }}> {this.state.text}</Text>
                            </View>

                            <View style={styles.FlatListContainer}>
                            <FlatList
                            scrollEnabled={false}
                                    data={[{ key: 'C', type: 'C' }, { key: '', type: '' }, { key: '', type: '' }, { key: '', type: '' }
                                        , { key: '7', type: 'N' }, { key: '8', type: 'N' }, { key: '9', type: 'N' }, { key: 'x', type: 'O' }
                                        , { key: '4', type: 'N' }, { key: '5', type: 'N' }, { key: '6', type: 'N' }, { key: '÷', type: 'O' }
                                        , { key: '1', type: 'N' }, { key: '2', type: 'N' }, { key: '3', type: 'N' }, { key: '+', type: 'O' }
                                        , { key: '.', type: 'N' }, { key: '0', type: 'N' }, { key: '=', type: 'E' }, { key: '-', type: 'O' }]}
                            renderItem={({ item }) => (
                                <View style={styles.ButtonContainer}>
                                    <TouchableOpacity style={styles.button}
                                        onPress={ () => this.getOperator(item.key, item.type)  }>
                                            <Text style={{ fontSize: 30, color:'#215f92'}}>  {item.key} </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            numColumns={4}
                            keyExtractor = {(item, index) => index}
                            />
                            </View>
                            </View>
                            );
                }
            }

            const styles = StyleSheet.create({
                                             MainContainer: {
                                             flex: 1,
                                             paddingTop: 50,
                                             },

                                             TextContainer: {
                                             flex: 4,
                                             },

                                            ButtonContainer: {
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             padding: 40,
                                             height:100,
                                             backgroundColor: '#d8d8d8',
                                             flex: 1,
                                             flexDirection: 'column',
                                             },
                                             button: {
                                                 backgroundColor: '#f2f2f2',
                                                 height: 100,
                                                 width: 100,
                                                 justifyContent: 'center',
                                                 alignItems: 'center',
                                             },
                                             FlatListContainer: {
                                             flex: 15,
                                             flexDirection: 'column',
                                             }
                                             });
