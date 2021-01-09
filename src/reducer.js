export const initialState = {
  basket: [
      {
        id:'1323',
        title:'The Lean Start',
        price:11.96,
        rating:4,
        image:'https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg',
      }
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
