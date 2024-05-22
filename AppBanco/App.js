import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground>
      source={{uri:'./img/Image-NUBank.jpg'}}
      style={styles.img}
      </ImageBackground> */}

      <View style={styles.texto1}>
      <Text style={{fontSize:30,fontWeight: 'bold'}}>Um mundo financeiro sem complexidades</Text>
      </View>

      <View style={styles.botao1}>
      <Button style={styles.Button}
      title='Começar'
      color= 'purple'
      />
      </View>

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

  botao1:
  {
    height:100,
    width: 350
  },

  texto1:
  {
    height: 100
  }
});
