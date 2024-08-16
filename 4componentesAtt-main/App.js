import {View } from "react-native";

import Cabeçalho from "./src/Componente/Cabeçalho";

import Corpo from "./src/Componente/Corpo";

import Rodapé from "./src/Componente/Rodapé";

import { styles } from "./src/styles/StyleSheet";



export default function App() {
  return (

  <View style={styles.container}>

    {/* Cabeçalho*/}
    <Cabeçalho/>

    {/* Corpo*/}
    <Corpo/>

    {/* Rodapé*/}
    <Rodapé/>
  </View>

  );
}

