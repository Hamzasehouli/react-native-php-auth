import { SET_USER } from "../actions/userActions";

const initState = {
  isLoggedin: false,
  email: "test email",
};

const userReducer = function (state = initState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, isLoggedin: action.isLoggedin, email: action.email };
    default:
      return state;
  }
};

export default userReducer;
