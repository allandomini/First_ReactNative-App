import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

export default class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ""}
    this.calcular = this.calcular.bind(this)
  }

    calcular(){

      let num1 = parseInt(this.state.nota1)
      let num2 = parseInt(this.state.nota2)
      let media = (num1 + num2 /2)

      if (media >= 6 && this.state.faltas <= 10) {
        this.setState({resultado: "aluno foi Aprovado"})
      }else{
        this.setState({resultado: "aluno foi Reprovado"})
      }
    }

  render(){
    return( 
      <View style={styles.container}>
        <Text style={styles.Titles}>
         Voce passou?
        </Text>
        <TextInput style={styles.textInput}
        onChangeText={(nota1) => {this.setState({nota1})}}
        keyboardType = "numeric"
        placeholder="Nota 1"/>
        <TextInput style={styles.textInput}
        onChangeText={(nota2) => {this.setState({nota2})}}
        keyboardType = "numeric"
        placeholder="Nota 1"/>
        <TextInput style={styles.textInput}
        onChangeText={(faltas) => {this.setState({faltas})}}
        keyboardType = "numeric"
        placeholder="Nota 1"/>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.textResults}>{this.state.resultado}
        </Text>
      </View>
    )
    
  }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1
      
    },
    textInput: {
      padding: 30,
      backgroundColor: '#cccc',
      marginLeft : 50,
      marginRight : 50,
      marginTop : 50,
      borderRadius : 40,

    },
    button: {
      margin: 30,
      padding: 30,
      backgroundColor: '#37474f',
      borderRadius : 40,
      
    },
    textButton: {
      color: '#FFF',
      fontSize:18,
      fontWeight: 'bold',
      fontFamily: 'ComicSans',
      alignItems: 'center'
     },
     textResults: {
      color: '#000',
      fontSize:22,
      fontWeight: 'bold',
      fontFamily: 'ComicSans',
      alignSelf: 'center'
     },
     Titles: {
      color: '#000',
      fontSize:22,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      alignSelf: 'center'
      
     }
})
