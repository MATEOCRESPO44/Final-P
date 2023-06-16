import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProducsScreen from "../screens/ProducsScreen";
import {screen} from "../utils/screenName";
import DetailProductsScreen from "../screens/DetailProductsScreen";
const Stack=createNativeStackNavigator();

export const ProductsStack=({setnewProduct})=>{
    return(

        <Stack.Navigator>
            <Stack.Screen
                name={screen.products.products}
                component={ProducsScreen}
                options={{title:"Productos"}}
            />
            <Stack.Screen
                name={screen.products.detailProduct}
                children={(props)=>(
                    <DetailProductsScreen{...props} setnewProduct={setnewProduct}/>
                  )}
                options={{title:"Detalle"}}
            />

        </Stack.Navigator>
    )

}