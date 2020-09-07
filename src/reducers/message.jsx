import * as types from "../constants/ActionTypes";
import * as Message from '../constants/Messages'
const initialState = Message.MSG_WELCOME

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:   // ở constants
    return action.message       // message này ở actions/index
    default: return state;
  }
};
export default message;
