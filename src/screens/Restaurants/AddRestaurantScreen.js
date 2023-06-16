import React from "react";
import { View, Text,StyleSheet } from "react-native";

const AddRestaurantScreen = () => {
  return (
    <View  style={styles.container}>
      <Text>Bienvenido</Text>
    </View>
  );
};






export default AddRestaurantScreen;
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