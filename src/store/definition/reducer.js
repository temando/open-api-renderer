let initialState = null;

export default function definitionReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
  case 'GET_DEFINITION':
    return payload;
  default:
    return state;
  }
}
