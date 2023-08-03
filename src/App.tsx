import { useEffect } from "react";
import CatalogPage from "./pages/CatalogPage";
import { useCartStore } from "./store";

const App = () =>{
  const {createStore} = useCartStore(); 
  useEffect(() => {
    createStore()
  
  }, []);
  return (
    <div >
        <CatalogPage />
    </div>
  );
}

export default App;
