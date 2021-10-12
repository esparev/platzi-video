import axios from "axios";

export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

export const getVideoSource = (payload) => ({
  type: "GET_VIDEO_SOURCE",
  payload,
});

export const getSearchResult = (payload) => ({
  type: "GET_SEARCH_RESULT",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/auth/sign-up", payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: "/auth/sign-in",
      method: "post",
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        console.log("Data:");
        console.log(data);
        console.log(data.user.email);
        console.log(data.user.name);
        console.log(data.user.id);
        console.log(data.user.token);
        debugger;
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `token=${data.user.token}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

export { setFavorite as default };
