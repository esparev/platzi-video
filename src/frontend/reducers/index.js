const reducer = (state, action) => {
  const lists = [...state.trends, ...state.originals];
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case "GET_SEARCH_RESULT":
      if (action.payload === "") return { ...state, searchResult: [] };
      return {
        ...state,
        searchResult: lists.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default reducer;
