/* eslint-disable react-hooks/exhaustive-deps */
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from "react"
import { db } from "../lib/firebaseconfig"
export interface Ingredient {
    id: string;
    value: string;
  }
  
  export interface Method {
    id: string;
    value: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    category: string[];
    ingredients: Ingredient[];
    method: Method[];
  }
  
type ApiContextProviderProps = {
    children: React.ReactNode
}

export type ApiContextType = {
    ProductArray: Product[]
 
}

export const ApiFirebaseContext = createContext({} as ApiContextType)
export const UseProductContext = () => {
    return useContext(ApiFirebaseContext)
  }

function AppProvider  ({ children }: ApiContextProviderProps) {
    const [DataApiItens, setDataApiItens] = useState<Product[]>([]);
    const CollectionData = collection(db, "food");

    useEffect(() => {
        onSnapshot(CollectionData, (snapshot) => {
            setDataApiItens(
                snapshot.docs.map((item) => {
                    return {
                        id: item.id,
                        ...item.data(),
                    } as Product;
                })
            );
        });
    }, []);

   

    return (
        <ApiFirebaseContext.Provider value={{ ProductArray: DataApiItens}}>
            {children}
        </ApiFirebaseContext.Provider>
    )
}

export default AppProvider;