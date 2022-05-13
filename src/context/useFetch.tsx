import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type PropsProviderHookCustom = {
   children: ReactNode;
}

export const SearchContext = createContext({} as any);

export const SearchContextProvider = ({ children }: PropsProviderHookCustom) => {
   const [dataValue, setDataValue] = useState([]);

   const url = `https://fakestoreapi.com/products`;

   async function getApi() {
      try {

         const response = await fetch(url);
         const dataRequest = await response.json();
         setDataValue(dataRequest);
      }
      catch (error) {
         console.log(error);
      }
   }



   return (
      <SearchContext.Provider value={{ dataValue, getApi }}>
         {children}
      </SearchContext.Provider>
   );
};

export function useFetch() {
   const data = useContext(SearchContext);

   const { dataValue, getApi } = data;

   return { dataValue, getApi };
}
