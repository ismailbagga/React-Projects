const reducer = (state, action) => {
  if (action.type === "loaded") {
    return { ...state, loading: false };
  } else if (action.type === "setData") {
    let sum = 0;
    let count = 0;
    for (let obj of action.payload) {
      count += obj.amount;
      sum += obj.amount * obj.price;
    }
    return { ...state, data: action.payload, total: sum, itemsCount: count };
  } else if (action.type === "changeAmount") {
    let id = action.payload.id;
    let amount = action.payload.amount;
    let sum = 0;
    let count = 0;
    return {
      ...state,
      data: state.data.map((item) => {
        console.log("data ", count);
        if (item.id === id) {
          sum += amount * item.price;
          count += parseInt(amount);
          return { ...item, amount: amount };
        } else {
          sum += item.amount * item.price;
          count += parseInt(item.amount);
          return item;
        }
      }),
      total: sum,
      itemsCount: count,
    };
  } else if (action.type === "clearTheCart") {
    console.log("clear the cart ");
    return { ...state, data: [], total: 0, itemsCount: 0 };
  }
  return state;
};
export default reducer;
