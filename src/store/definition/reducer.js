import { ActionType } from './constants';

let initialState = {
  parserType: 'open-api-v3',
  definition: null,
  parsedDefinition: null
};

export default function definitionReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ActionType.FETCH_DEFINITION_SUCCESS:
      return {
        ...state,
        definition: payload
      };
    case ActionType.PARSE_DEFINITION_SUCCESS:
      return {
        ...state,
        parsedDefinition: payload
      };
    default:
      return state;
  }
}
