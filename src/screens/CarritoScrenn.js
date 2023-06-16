import React, { useState, useEffect } from "react";
import { Button, color } from "@rneui/base";
import { View, Text,StyleSheet } from "react-native";
import {ListItem} from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CarritoScrenn = ({ newProduct }) => {
  const [products, setProducts] = useState([]);
  const [contador, setContar] = useState(0);
  useEffect(() => {
    if (newProduct != null) {
      setProducts([...products, newProduct]);
    }
  }, [newProduct]);

  return (
    <KeyboardAwareScrollView>
      {products.map((product) => {
        return (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {product.name} ${product.price}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}
      <Text style={styles.b}> Total </Text> 
       <Text style={styles.b}>{contador} </Text>
      <Button
        buttonStyle={styles.btb}
        title="Calcular total "
        onPress={() => setContar({contador} + {product.price} )}></Button>
    </KeyboardAwareScrollView>
  );
};

export default CarritoScrenn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#32cd32",
      paddingTop: 100,
    },
    title: {
      marginTop: 30,
      paddingVertical: 10,
      //borderWidth: 1,
      borderColor: "#f8f8ff",
      //borderRadius: 200,
      backgroundColor: "#000000",
      color: "#f8f8ff",
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      paddingTop: 5,
      width: "100%",
    },
    image: {
      resizeMode: "repeat",
      height: 350,
      width: "100%",
      paddingTop: 200,
  
      //marginBottom:1,
    },
    subt1: {
      arginTop: 30,
      paddingVertical: 10,
      marginTop: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 200,
      //backgroundColor: "#7cfc00",
      color: "#000000",
      textAlign: "left",
      fontSize: 25,
      fontWeight: "bold",
      width: "90%",
      flexDirection: "row",
      right: 100,
    },
  
    subt: {
      //marginTop: 30,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: "#f8f8ff",
      borderRadius: 200,
      backgroundColor: "#000000",
      color: "#f8f8ff",
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold",
      width: "100%",
    },
  
    flatLisCo: {
      backgroundColor: "#70a1ff",
      marginVertical: 10,
      marginHorizontal: 16,
      paddingBottom: 32,
      justifyContent: "center",
      alignItems: "center",
    },
    btb: {
      marginTop: 10,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#f8f8ff",
      borderRadius: 100,
      backgroundColor: "#000000",
      color: "#f8f8ff",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
    b: {
      marginTop: 10,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#f8f8ff",
      borderRadius: 100,
      //backgroundColor: "#000000",
      color: "#000000",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
  });