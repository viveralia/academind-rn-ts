import { createContext, PropsWithChildren, useState } from "react";

import Meal from "../../models/meal";

type Id = Meal["id"];

export interface FavoriteContextValue {
  ids: Id[];
  addFavorite: (id: Id) => void;
  removeFavorite: (id: Id) => void;
}

export const FavoritesContext = createContext({} as FavoriteContextValue);

export default function FavoritesContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [ids, setIds] = useState<Id[]>([]);

  function addFavorite(id: Id) {
    setIds((ids) => [...ids, id]);
  }

  function removeFavorite(id: Id) {
    setIds((ids) => ids.filter((i) => i !== id));
  }

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
