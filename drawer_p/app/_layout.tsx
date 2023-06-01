import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Principal",
      }}
    />
    <Drawer.Screen
      name="telaA" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "User",
        title: "Bem-vindo a tela A",
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
  </Drawer>
  );
}