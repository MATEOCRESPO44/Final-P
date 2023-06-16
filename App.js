import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./src/utils/firebase";
import { useState } from "react";

const App=()=> {
  const [newProduct,setnewProduct] = useState(null);
  return (
  
    <>
    <NavigationContainer>
    <AppNavigation  newProduct={newProduct} setnewProduct={setnewProduct}  />
    </NavigationContainer>

    </>
    
  );
};

export default App;