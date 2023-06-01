import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { Link } from "expo-router";



export default function App() {
  return (
    <View style={styles.container}>
        <View style={{display:'flex', alignItems:'center',}}>
          <Image source={require('../assets/maggie.webp')} style={{width:100, height:100, resizeMode:'contain', marginBottom:20, borderRadius:100,  }}/>
      <Text style={styles.titulo}>cadastro</Text>
      <TextInput placeholder='    qualquer coisa' style={styles.input}></TextInput>
      <TextInput placeholder='    qualquer coisa' style={styles.input}></TextInput>
      <TextInput placeholder='    qualquer coisa' style={styles.input}></TextInput>
      <TextInput placeholder='    qualquer coisa' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
      <Text style={{fontWeight:'700', fontFamily:'monospace', fontSize:'22'}}><Link href="/telaA">Ir para a tela A</Link></Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15, 
    fontFamily:'monospace', 
    padding: 20,
    backgroundColor:'#e0efff',
    borderRadius:7,
    borderWidth:2,
    borderBottomWidth:5,
    borderRightWidth:5,
    borderColor:'#e2e2e2',
  },

  button:{
    padding:10,
    backgroundColor:'transparent',
    width:200,
    borderRadius:10,
    color:'#FFF',
    borderWidth:2,
    borderBottomWidth:5,
    textAlign:'center',
    borderColor:'#e0efff',

  },
  input:{
    width: 300,
    height:40,
    borderWidth:1,
    borderRadius:5,
    marginBottom:15,
    borderColor:'#e2e2e2',
    borderBottomWidth:2,
    borderRightWidth:2,
  }


});
