import React, { useState, useEffect, useContext, useCallback } from "react";
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [num, setNum] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [drinksObj, setDrinksObj] = useState([]);
  const [previewDrinks, setPreviewDrinks] = useState(null);

  const getDrinks = (value) => {
    setIsEmpty(false);
    if (value === "") {
      setDrinksObj(previewDrinks);
    } else {
      setSearchValue(value);
    }
  };

  const fetchData = useCallback(
    async (url) => {
      try {
        const response = await fetch(url + searchValue);
        const data = await response.json();

        if (!data.drinks) {
          setIsEmpty(true);
        } else if (searchValue === "") {
          setPreviewDrinks(data.drinks);
        }
        setDrinksObj(data.drinks);
      } catch (error) {
        console.log("error", error);
      }
    },
    [searchValue]
  );
  useEffect(() => {
    fetchData(url);
  }, [fetchData]);
  return (
    <AppContext.Provider
      value={{
        drinksObj,
        isEmpty,
        searchValue,
        previewDrinks,
        num,
        setNum,
        getDrinks,
        setIsEmpty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
export { useGlobalContext };
