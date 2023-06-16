import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
    //backgroundColor:"#32cd32",
  },
  container:{
    //backgroundColor:"#32cd32",

  },
  image: {
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnStyle: {
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
});
