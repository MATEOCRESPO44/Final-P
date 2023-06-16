import React from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { Image } from 'react-native';
import { screen } from '../utils/screenName';


const  BienvenidaScrenn = (props)=> {
  const {navigation} = props
  const goToAcount=()=>{
    console.log("Ir a creacion de Restaurante");
    //navigation.navigate(screen.AccumlatorScreen);
    navigation.navigate(screen.account.tab,{screen:screen.account.tab});
};  



  return (
    
    <View   style={styles.container}>
      <Image
        source={require("../../assets/img/carrito2.png")}
        style={styles.image}
      />
      
      
      
      <Text style={styles.title} onPress={goToAcount}>BuyOnli</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    //backgroundColor: '#000000',
    paddingTop: 100,
  },
  title: {
    marginTop: 50,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#adff2f',
    borderRadius: 100,
    backgroundColor: '#000000',
    color: '#f8f8ff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image:{
    resizeMode:"center",
    height:350,
    width:"100%",
    paddingTop: 200,
    
    //marginBottom:1,
    

  },
});







export default BienvenidaScrenn;

