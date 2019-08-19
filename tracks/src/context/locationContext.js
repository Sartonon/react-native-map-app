import createDataContext from "./createDataContext";

const locationReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const actions = {
  startRecording: dispatch => () => {},
  stopRecording: dispatch => () => {},
  addLocation: dispatch => () => {}
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  actions,
  { recording: false, locations: [], currentLocation: null }
);
