import { AUTHENTICATE, LOGOUT } from "../actions/actionsAuth";

const initalState = {
  token: null,
  userId: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return {
        initalState,
      };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   };
    default:
      return state;
  }
};
