import { View, Text, StyleSheet } from "react-native";
import { Button, color } from "@rneui/base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { screen } from "../utils/screenName";
import React, { useState } from "react";
import { Image } from "react-native";

const DetailProductsScreen = ({ route, setnewProduct, navigation }) => {
  const product = route.params;
  const agregarCarro = () => {
    setnewProduct(product);
    navigation.navigate(screen.carritos.tab);
  };
  return (
    <KeyboardAwareScrollView>
      {/* <Text >Total : {contador} </Text> */}

      {/* <Button
              Style={styles.btb}
              title="-"
              onPress={() => setContar(contador - product.price)}
            /> */}
      <Text style={styles.title}>ID:</Text>
      <Text style={styles.subt}>{product.id}</Text>
      <Image
        source={product.imgen}
        style={{
          resizeMode: "center",
          height: 350,
          width: "100%",
          paddingTop: 200,
        }}
      />
      <Text style={styles.title}>NOMBRE:</Text>
      <Text style={styles.subt}>{product.name}</Text>
      <Text style={styles.title}>Precio:</Text>
      <Text style={styles.subt}>{product.price}$</Text>
      <Text style={styles.title}>Detalle:</Text>
      <Text style={styles.subt}>{product.Detalle}</Text>
      <Text style={styles.title}>Componentes:</Text>
      <Text style={styles.deta}>{product.detalle1}</Text>

      <Button
        buttonStyle={styles.btnLogin}
        title="Agregar alCarro"
        onPress={agregarCarro}
      />
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000000",
    paddingTop: 100,
  },
  title: {
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
  image: {
    resizeMode: "repeat",
    height: 350,
    width: "100%",
    paddingTop: 200,

    //marginBottom:1,
  },

  subt: {
    //marginTop: 10,
    paddingVertical: 4,
    //borderWidth: 4,
    borderColor: "#f8f8ff",
    //borderRadius: 90,
    backgroundColor: "#00ff00",
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "normal",
    width: "100%",
  },
  deta: {
    //marginTop: 10,
    paddingVertical: 8,
    //borderWidth: 4,
    borderColor: "#f8f8ff",
    borderRadius: 100,
    //backgroundColor: '#000000',
    color: "#000000",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnLogin: {
    //backgroundColor: "#00a680",
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#f8f8ff",
    borderRadius: 100,
    backgroundColor: "#ff0000",
    color: "#f8f8ff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default DetailProductsScreen;
