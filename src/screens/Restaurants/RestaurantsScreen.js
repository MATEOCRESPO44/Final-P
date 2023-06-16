import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import { screen } from "../../utils/screenName";

const RestaurantsScreen = (props) => {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    //console.log("Ir a creación de restaurante");
    navigation.navigate(screen.products.products);
    //navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };

  return (
    <View>
      <Text style={styles.subt}>Click</Text>
      <Button title="Visitar Tienda " 
      onPress={goToAddRestaurant} 
       />
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000000',
    paddingTop: 100,
  },
  title: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#f8f8ff',
    borderRadius: 100,
    backgroundColor: '#000000',
    color: '#f8f8ff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image:{
    resizeMode:"repeat",
    height:350,
    width:"100%",
    paddingTop: 200,
    
    //marginBottom:1,
    

  },

  subt:{
    //marginTop: 10,
    paddingVertical: 4,
    //borderWidth: 4,
    borderColor: '#f8f8ff',
    //borderRadius: 90,
    backgroundColor: '#00ff00',
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'normal',

  }
});