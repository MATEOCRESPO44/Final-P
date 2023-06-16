import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../utils/screenName";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "react-native";
import { Button, color } from "@rneui/base";

const ProducsScreen = () => {
  const navigation = useNavigation();
  const [contador, setContar] = useState(0);
  const products = [
    {
      id: 1,
      name: "Banana",
      price: 1,
      Detalle: "Fruta",
      imgen: require("../../assets/img/banana.jpg"),
      detalle1:
        " El plátano apenas contiene proteínas (1,2%) y lípidos (0,3%), aunque su contenido en estos componentes supera al de otras frutas En su composición destaca su riqueza en hidratos de carbono 20",
    },
    {
      id: 2,
      name: "Tomate",
      price: 2,
      Detalle: "Vegetal",
      imgen: require("../../assets/img/tomate.jpg"),
      detalle1:
        "El tomate está compuesto principalmente por agua y su macronutriente mayoritario son los hidratos de carbono. Entre las vitaminas cabe destacar el contenido en vitamina A, básicamente en forma de β-carotenos (494 μg/100 gramos) y vitamina C y entre los minerales el potasio.",
    },
    {
      id: 3,
      name: "whisky",
      price: 25,
      Detalle: "Vegetal",
      imgen: require("../../assets/img/www.jpg"),
      detalle1:
        "El whisky es una aguardiente de grano hecha a partir de la destilación de la malta de cereales como centeno, cebada, trigo e, incluso, maíz. En general para su fabricación se mezcla agua con cebada, esta preparación se fermenta, y posteriormente, se añeja durante al menos unos tres años.",
    },
    {
      id: 4,
      name: "Chocolate",
      price: 0.5,
      Detalle: "Dulces",
      imgen: require("../../assets/img/choco.jpg"),
      detalle1:
        "Un buen chocolate no debe tener más de 4 ingredientes. Cacao en grano, manteca de cacao, azúcar, leche en polvo (si es un chocolate con leche), y a veces la adición de un emulsionante. El chocolate bien elaborado es un superalimento.",
    },
    {
      id: 5,
      name: "Chicles",
      price: 0.1,
      Detalle: "Dulces",
      imgen: require("../../assets/img/CLICLE.jpg"),
      detalle1:
        "Los chicles están compuestos de plástico (su base goma), resinas naturales y sintéticas, azúcar, suavizantes, colorantes y aromatizantes naturales y artificiales.",
    },
    {
      id: 6,
      name: "Maruchan",
      price: 0.5,
      Detalle: "Fideos",
      imgen: require("../../assets/img/MARUCHAN.jpg"),
      detalle1:
        "Las materias primas son harina de trigo y maíz, salsa de soya, sal, aceite refinado, vegetales deshidratados, glutamato monosódico, azúcar, especias, aceite vegetal y extracto de pimienta roja.",
    },
    {
      id: 7,
      name: "Manzana",
      price: 1,
      Detalle: "Fruta",
      imgen: require("../../assets/img/MANZA.jpg"),
      detalle1:
        "Contiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además, gracias a la presencia de ácido málico y tartárico facilita la digestión de aquellos alimentos que posean un alto contenido en grasas.",
    },
  ];

  //   const prueba = () => {
  //     navigation.navigate(screen.products.detailProduct);
  //   };
  //const [p1, p2, p3] = products;

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.subt}>Tienda De Productos</Text>
      {products.map((product) => {
        return (
          <ListItem
            onPress={() =>
              navigation.navigate(screen.products.detailProduct, product)
            }
          >
            <ListItem.Content>
              <View>
                <Image
                  source={product.imgen}
                  style={{ height: 200, width: 200, }}
                />
              </View>

              <ListItem.Title style={styles.title}>
                {product.name} ${product.price}
              </ListItem.Title>

              <ListItem.Subtitle>
                <Text style={styles.subt1}>Total : {contador} </Text>
              </ListItem.Subtitle>
            </ListItem.Content>

            {/* <Button
              Style={styles.btb}
              title="+"
              onPress={() => setContar(contador + product.price)}
            />

            <Button
              Style={styles.btb}
              title="-"
              onPress={() => setContar(contador - product.price)}
            /> */}
          </ListItem>
        );
      })}
    </KeyboardAwareScrollView>
  );
};
export default ProducsScreen;

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
    resizeMode: "center",
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
});
