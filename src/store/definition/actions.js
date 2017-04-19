import request from 'superagent';
import { ActionType } from './constants';

export default function getDefinition(url) {
  return (dispatch) => {
    request
      .get(url)
      .timeout({
        response: 5000,
        deadline: 60000,
      })
      .then((response) => {
        let definition = response.body;

        if (url.endsWith('yaml') || url.endsWith('yml')) {
          definition = yaml.safeLoad(response.text);
        } else if (url.endsWith('json')) {
          definition = JSON.parse(response.text);
        }

        if (definition) {
          dispatch(fetchDefinitionSuccess(definition));
        }
      }).catch((error) => {
        dispatch(fetchDefinitionFailure(error));
      }
    );
  };
}

function fetchDefinitionSuccess(definition) {
  console.log({definition});

  return {
    type: ActionType.FETCH_DEFINITION_SUCCESS,
    payload: definition,
  }
}

function fetchDefinitionFailure(error) {
  return {
    type: ActionType.FETCH_DEFINITION_FAILURE,
    payload: error,
  }
}
