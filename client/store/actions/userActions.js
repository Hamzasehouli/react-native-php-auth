export const SET_USER = "SET_USER";

export const setUser = (email, isLoggedin) => {
  return {
    type: SET_USER,
    email: email,
    isLoggedin: isLoggedin,
  };
};
