import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from "expo-router";




export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image-removebg-preview.png')} style={{width:200, height:200, resizeMode:'contain', marginBottom:30,}}/>
      <Text style={{width:200, height:40, backgroundColor:'#e0efff', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:10, marginBottom:20}}>Login</Text>
      <TextInput placeholder='    usuário' style={styles.input}></TextInput>
      <TextInput placeholder='    senha' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
      <Text style={{fontWeight:'700', fontFamily:'monospace', fontSize:'22'}}><Link href="/telaB">Log In</Link></Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
