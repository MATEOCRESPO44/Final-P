import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/screenName";
import RestaurantsStack from "./RestaurantsStack";
import CarritoScrenn from "../screens/CarritoScrenn";
import { ProductsStack } from "./ProductsStack";

import AccountStack from "./AccountStack";
import BienvenidaScrenn from "../screens/BienvenidaScrenn";

//Crear una insancia paa la gestión de la navegación
const Tab = createBottomTabNavigator();

export const AppNavigation = ({ newProduct, setnewProduct }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { position: "relative" },
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.bienvenidas.tab}
        component={BienvenidaScrenn}
        options={{ title: "Home" }}
      />

      <Tab.Screen
        name={screen.products.tab}
        children={(props)=>(
          <ProductsStack {...props} setnewProduct={setnewProduct}/>
        )}
        options={{ title: "Tienda" }}
      />

      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />

      {/* <Tab.Screen
        name={screen.products.tab}
        component={productsStack}
        options={{ title: "Productos" }}
      /> */}
      <Tab.Screen
        name={screen.carritos.tab}
        children={(props)=>(
          <CarritoScrenn {...props} newProduct={newProduct}/>
        )}
        options={{ title: "Carritos" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurants.tab) {
    iconName = "compass-outline";
  }

  if (route.name == screen.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name == screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name == screen.search.tab) {
    iconName = "magnify";
  }

  if (route.name == screen.account.tab) {
    iconName = "home-outline";
  }
  if (route.name == screen.bienvenidas.tab) {
    iconName = "home-account";
  }
  if (route.name == screen.products.tab) {
    iconName = "apple";
  }
  if (route.name == screen.carritos.tab) {
    iconName = "cart-minus";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
