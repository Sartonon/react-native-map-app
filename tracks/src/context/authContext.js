import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {};

export const { Provider, Context } = createDataContext(authReducer, actions, {
  isSignedIn: false
});
