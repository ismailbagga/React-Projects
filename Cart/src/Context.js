import React, { useReducer, useEffect, useContext, createContext } from "react";
import reducer from "./reducer";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const changeAmount = (id, amount) => {
    dispatch({ type: "changeAmount", payload: { id: id, amount: amount } });
  };
  const clearTheCart = () => {
    dispatch({ type: "clearTheCart" });
  };
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    total: 0,
    itemsCount: 0,
  });
  const url = "https://course-api.com/react-useReducer-cart-project";
  async function fetchData(url) {
    let res = await fetch(url).then((res) => res.json());

    dispatch({ type: "setData", payload: res });
    dispatch({ type: "loaded" });
    // dispatch({type:'the '})
  }
  useEffect(() => {
    fetchData(url);
  }, []);
  //   useEffect(() => {
  //     console.log("totalChanged");
  //     dispatch({ type: "countTotal" });
  //   }, [state.data]);
  return (
    <AppContext.Provider value={{ ...state, changeAmount, clearTheCart }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
