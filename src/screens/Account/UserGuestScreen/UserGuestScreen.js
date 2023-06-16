//rnf+TAB
import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { styles } from "./UserGuestScreen.styles";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/carrito2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de BuyOnli</Text>
      <Text style={styles.description}>
        Crea una cuenta para comprar en linea  .
      </Text>
      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
