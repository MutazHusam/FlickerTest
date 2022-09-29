import React, { createContext, PropsWithChildren, useState } from "react";
import Favorites from "../screens/Favorites";

interface ContextType {
  handlePushFavorites: (url: string) => void;
  getFavItems: () => string[];
}
export const favoritesContext = createContext<ContextType>({} as any);

const FavoritesContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [arr, setArr] = useState<string[]>([]);
  const handlePushFavorites = (url: string) => {
    const cloneArray = arr;
    const currentIndex = cloneArray.indexOf(url);
    if (currentIndex === -1) {
      cloneArray.push(url);
      setArr(cloneArray);
    } else {
      cloneArray.splice(currentIndex, 1);
      setArr(cloneArray);
    }
  };

  const getFavItems = () => arr;

  return (
    <>
      <favoritesContext.Provider
        value={{
          handlePushFavorites,
          getFavItems,
        }}
      >
        {children}
      </favoritesContext.Provider>
    </>
  );
};

export default FavoritesContext;
