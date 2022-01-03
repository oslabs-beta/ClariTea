import * as types from '../constants/actionTypes';

const initialState = {
  setSynced: true
};
const visualReducer = (state = initialState, action) => {
  switch  (action.type) {  
    case types.CONNECT_FILE :
      const connected = {
          ...state,
          setSynced: true
      }
      return connected;
    case types.RENDER_TREE :
    case types.REPLICATION_FACTOR :
    case types.RENDER_SCHEMA :  
  default:
      return state;
  }
}
export default visualReducer;