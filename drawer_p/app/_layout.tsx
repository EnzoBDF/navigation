import { Drawer } from "expo-router/drawer";
import { View, StyleSheet } from "react-native";


export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Cadastro",
      }}
    />
    <Drawer.Screen
      name="telaA" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Login",
        title: "Faça seu login",
/*         drawerItemStyle: { height:0} 
 */      }}
    />
        <Drawer.Screen
      name="telaB" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela B",
        title: "Bem-vindo a tela B",
      }}
    />
       <Drawer.Screen
      name="Tela C" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela C",
        title: "Bem-vindo a tela C",
      }}
    />
  </Drawer>
  );
}


const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "purple",
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "purple",
    paddingVertical: 20,
  },
});




