import { SET_SONG_PLAY } from "./Constant";

const initState = {
  songplay: {},
  setSongPlay: {},
};

function reducer(state, action) {
  switch (action.type) {
    case SET_SONG_PLAY:
      return {
        setSongPlay: action.payload,
      };
    default:
      throw new Error("invalid action");
  }
}

export { initState };
export default reducer;
