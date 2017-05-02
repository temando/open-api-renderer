import request from 'superagent';
import { ActionType } from './constants';
import getParserFunction from '../../parser/parserFactory';

export default function getDefinition(url, parserType) {
  return (dispatch) => {
    request
      .get(url)
      .timeout({
        response: 5000,
        deadline: 60000
      })
      .then((response) => {
        let definition = response.body;

        // TODO move this to another place
        if (url.endsWith('yaml') || url.endsWith('yml')) {
          definition = yaml.safeLoad(response.text);
        } else if (url.endsWith('json')) {
          definition = JSON.parse(response.text);
        }

        if (definition) {
          dispatch(fetchDefinitionSuccess(definition));

          const parser = getParserFunction(parserType);
          parser(definition)
            .then(parsedDefinition => {
              dispatch(parseDefinitionSuccess(parsedDefinition));
            })
            .catch(error => {
              dispatch(parseDefinitionFailure(error));
            });
        }
      }).catch((error) => {
        dispatch(fetchDefinitionFailure(error));
      }
    );
  };
}

function fetchDefinitionSuccess(definition) {
  return {
    type: ActionType.FETCH_DEFINITION_SUCCESS,
    payload: definition
  };
}

function fetchDefinitionFailure(error) {
  console.error('Failed fetching definition', error);
  return {
    type: ActionType.FETCH_DEFINITION_FAILURE,
    payload: error
  };
}

function parseDefinitionSuccess(parsedDefinition) {
  return {
    type: ActionType.PARSE_DEFINITION_SUCCESS,
    payload: parsedDefinition
  };
}

function parseDefinitionFailure(error) {
  console.error('Failed parsing definition', error);
  return {
    type: ActionType.PARSE_DEFINITION_FAILURE,
    payload: error
  };
}
